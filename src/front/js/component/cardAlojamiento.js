import React, { useContext, useState, useEffect } from "react";
import { Steps, Step } from "react-step-builder";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CardAlojamiento = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);

	return (
		<div className="card" style={{ width: 540 + "px" }}>
			<div className="row no-gutters">
				<div className="col-md-6 ">
					<img
						src="https://www.autonomosyemprendedor.es/media/autonomosyemprendedor/images/2020/04/30/2020043016011015191.jpg"
						className="card-img"></img>
				</div>
				<div className="col-md-6">
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<h6 className="card-subtitletext-muted">
							{props.ciudad}, {props.provincia}
						</h6>
						<p className="card-text">Huespedes: {props.huespedes}</p>
						<p className="card-text">Dormitorios: {props.dormitorios}</p>
						<p className="card-text">Baños: {props.bathrooms}</p>

						<Link
							to={{
								pathname: "/descripcionMisPropiedades/" + props.id,
								state: props
							}}
							className="btn btn-primary">
							Más información
						</Link>
					</div>
				</div>
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
	amenidades: PropTypes.array,
	id: PropTypes.number
};
