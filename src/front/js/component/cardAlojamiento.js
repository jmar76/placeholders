import React, { useContext, useState, useEffect } from "react";
import { Steps, Step } from "react-step-builder";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CardAlojamiento = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);

	return (
		<div className="card" style={{ width: 22 + "rem" }}>
			<div className="card-body">
				<img
					src="https://www.autonomosyemprendedor.es/media/autonomosyemprendedor/images/2020/04/30/2020043016011015191.jpg"
					className="card-img-top"></img>
				<h5 className="card-title mt-3">{props.title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">
					{props.ciudad}, {props.provincia}
				</h6>
				<p className="card-text">Huespedes: {props.huespedes}</p>
				<p className="card-text">Dormitorios: {props.dormitorios}</p>
				<p className="card-text">Baños: {props.bathrooms}</p>

				<Link to={"/descripcionMisPropiedades/" + props.id} className="btn btn-primary">
					Más información
				</Link>
			</div>
		</div>
	);
};

CardAlojamiento.propTypes = {
	title: PropTypes.string,
	huespedes: PropTypes.string,
	dormitorios: PropTypes.string,
	bathrooms: PropTypes.string,
	ciudad: PropTypes.string,
	provincia: PropTypes.string,
	descripcion: PropTypes.string,
	id: PropTypes.string
};
