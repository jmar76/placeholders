import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CardAlojamiento } from "../component/cardAlojamiento";

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
		<div className="row mt-5 ml-5">
			{misPropiedades.map(propiedad => {
				return (
					<div className="col-3 pb-5" key={propiedad.index}>
						<CardAlojamiento
							key={propiedad.title}
							title={propiedad.titulo}
							huespedes={propiedad.huespedes}
							ciudad={propiedad.ciudad}
							provincia={propiedad.provincia}
							dormitorios={propiedad.dormitorios}
							bathrooms={propiedad.bathrooms}
						/>
					</div>
				);
			})}
		</div>
	);
};
