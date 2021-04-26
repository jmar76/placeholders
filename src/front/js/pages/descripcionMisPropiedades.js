import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { CardDescripcion } from "../component/cardDescripcion";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/descripcionMisPropiedades.scss";
export const DescripcionPropiedades = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const params = useParams();
	const [misPropiedades, setMisPropiedades] = useState([]);

	let info = {};
	for (let i = 0; i < misPropiedades.length; i++) {
		if (params.id == misPropiedades[i].id) {
			info = misPropiedades[i];
		}
	}
	console.log(info);

	useEffect(() => {
		fetch(API_URL + "/api/misPropiedades", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setMisPropiedades(responseJson));
	}, []);

	return (
		<Fragment>
			<div className="container">
				<div className="row pt-5">
					<div className="col-12  bg-white px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group row text-black">
							<div className="col-md-7 contenedorNombreAlojamiento">
								<div className="row">
									<i className="fas fa-home mt-2 ml-3 pl-1 text-success sizeCasa "></i>
									<h2 className="pl-2">{info.titulo}</h2>{" "}
								</div>
								<div className="row">
									<i className="fas fa-map-marker-alt ml-3 pl-2 text-success sizeUbicacion"></i>
									<h4 className="pl-3">
										{info.ciudad}, {info.provincia}
									</h4>
								</div>
								<hr></hr>
								<div className="row justificado">
									<div className="contenedor items">
										<i className="fas fa-bath text-success sizeCasa"></i>
										<p className="#"> {info.bathrooms} Baños</p>
									</div>
									<div className="contenedor items">
										<i className="fas fa-users text-success sizeCasa"></i>
										<p className="#"> {info.huespedes} Personas</p>
									</div>
									<div className="contenedor items">
										<i className="fas fa-bed text-success sizeCasa"></i>
										<p className="#">{info.dormitorios} Dormitorios</p>
									</div>
									<div className="contenedor items">
										<i className="fas fa-paw text-success sizeCasa"></i>
										<p className="#"> Mascotas</p>
									</div>
								</div>
							</div>
							<div className="col-md-5">
								<div className="row">
									<h4 className="center">imagenes</h4>
								</div>
							</div>
						</div>

						<div className="form-group row ">
							<div className="col-md-8 ">
								<div className="row">
									<h4 className="pl-2">Descripción</h4>
								</div>
								<p>{info.descripcion}</p>
							</div>
							<div className="col-md-4">
								<div className="row">
									<h4 className="center">Amenidades</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

DescripcionPropiedades.propTypes = {
	title: PropTypes.string,
	huespedes: PropTypes.string,
	dormitorios: PropTypes.string,
	bathrooms: PropTypes.string,
	ciudad: PropTypes.string,
	provincia: PropTypes.string,
	descripcion: PropTypes.string,
	id: PropTypes.string
};
