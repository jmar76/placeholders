import React, { useContext, useState, useEffect, Fragment } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CardAlojamiento } from "../component/cardAlojamiento";
import { CardDescripcion } from "../component/cardDescripcion";

export const MisPropiedades = () => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const [misPropiedades, setMisPropiedades] = useState([]);

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
			<div className="row mt-5 ml-5">
				{misPropiedades.length === 0 ? (
					<div className="col-12 mt-5">
						<div className="alert alert-warning" role="alert">
							Aún no tienes alojamientos añadidos &nbsp;
							<Link to="/alquilaTuPropiedad">haz click aquí para añadir uno</Link>
						</div>
					</div>
				) : (
					""
				)}
				{misPropiedades.map(propiedad => {
					return (
						<div className="col-4 mt-5 pt-5 pb-3" key={propiedad.id}>
							<CardAlojamiento
								key={propiedad.id}
								title={propiedad.titulo}
								huespedes={propiedad.huespedes}
								ciudad={propiedad.ciudad}
								descripcion={propiedad.descripcion}
								provincia={propiedad.provincia}
								dormitorios={propiedad.dormitorios}
								precio={propiedad.precio}
								bathrooms={propiedad.bathrooms}
								id={propiedad.id}
								calle={propiedad.calle}
								numero={propiedad.numero}
								codigo_postal={propiedad.codigo_postal}
								amenidades={propiedad.amenidades}
							/>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};
