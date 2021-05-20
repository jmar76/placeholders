import React, { useContext, useState, useEffect, Fragment } from "react";
import { Steps, Step } from "react-step-builder";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/cardAlojamiento.scss";
import ratings from "../../img/ratings.jpg";

export const CardAlojamiento = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);

	return (
		<Fragment>
			<div className="container mb-5 ">
				<div className="agrupacion bg-dark">
					<div className="imagen">
						<img src="https://i.blogs.es/bcc6a3/img_3573/840_560.jpg" className="forma borderRadio"></img>
					</div>
					<div className="texto">
						<div className="contenedortres">
							<div className="sizetitulopropiedad ml-2">
								<h5 className="text-primary">{props.title}</h5>
							</div>
							<div className="sizeestrellas">
								<img src={ratings} width="89px" height="21px" />
							</div>
						</div>
						<div className="localidad pl-3">
							<p>
								{props.ciudad}, {props.provincia}
							</p>
						</div>
						<div className="agrupacion botontexto">
							<div className="descripcionespersonal pl-3">
								<p className="">
									Alojamiento disponible máximo para {props.huespedes} personas, dispone de{" "}
									{props.dormitorios} dormitorios y de {props.bathrooms} baños{" "}
								</p>
							</div>
							<div className="botondescripcioncasas pl-3 bg-dark">
								<p className="tipotexto text-white">
									{" "}
									<strong>desde {props.precio}/noche</strong>
								</p>
								<Link
									to={{
										pathname: "/descripcionMisPropiedades/" + props.id,
										state: props
									}}
									className="btn btn-warning margenes">
									<strong>Ver detalles</strong>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

CardAlojamiento.propTypes = {
	title: PropTypes.string,
	huespedes: PropTypes.number,
	dormitorios: PropTypes.string,
	bathrooms: PropTypes.string,
	ciudad: PropTypes.string,
	provincia: PropTypes.string,
	descripcion: PropTypes.string,
	amenidades: PropTypes.array,
	id: PropTypes.number,
	precio: PropTypes.number,
	startDate: PropTypes.instanceOf(Date),
	endDate: PropTypes.instanceOf(Date)
};
