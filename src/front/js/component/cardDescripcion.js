import React, { useContext, useState, useEffect, Fragment } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CardDescripcion = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);

	return (
		<Fragment>
			<div className="container g">
				<div className="row pt-5">
					<div className="col-12  bg-white px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i className="fas fa-globe-africa sizePlaneta "></i>
									<h4 className="pl-2">Promoción Internacional</h4>
								</div>
								<p className="card-text">Huespedes: {props.ciudad}</p>

								<p className="card-text">Dormitorios: </p>
								<p className="card-text">Baños: </p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<div className="row">
									<i className="far fa-handshake sizeFlexible"></i>
									<h4 className="pl-2">Colaboración Flexible</h4>
								</div>
								<p>
									Nos adaptamos a su forma de trabajar, política de cancelaciones, anticipo, etc. Si
									no queda satisfecho, puede darse de baja en cualquier momento.
								</p>
							</div>
							<div className="contenedorSinExclusividad">
								<div className="row">
									<i className="fas fa-globe sizeSinExclusividad"></i>

									<h4 className="pl-2">Sin Exclusividad</h4>
								</div>
								<p>
									No exigimos exclusividad. Simplemente somos otro canal de venta para conseguir más
									reservas.
								</p>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i className="fas fa-headset sizePersonalizada"></i>

									<h4 className="pl-2">Atención Personalizada</h4>
								</div>
								<p>
									Gestionamos las reservas, las incidencias y estamos presentes en todo momento. Le
									asesoramos para ofrecer un mejor servicio al cliente.
								</p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<div className="row">
									<i className="far fa-grin-beam sizeTranquilidad"></i>

									<h4 className="pl-2">Para Tu Tranquilidad </h4>
								</div>
								<p>
									Establece unas normas de la casa que los clientes tengan que aceptar antes de
									alojarse. Informa de la conducta inadecuada de un cliente si algo sale mal. Recibe
									ayuda 24 horas, todos los días.
								</p>
							</div>
							<div className="contenedorDarDeAlta ">
								<h4>Da de Alta tu Alojamiento</h4>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Darse de alta es gratis.</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Asistencia 24 horas, 7 días</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Darse de alta son solo 15 minutos</p>
								</div>

								<Link to="/signup">
									<button type="button" className="btn colorBotonDardeAlta " value="crear">
										<strong>Empezar</strong>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

CardDescripcion.propTypes = {
	title: PropTypes.string,
	huespedes: PropTypes.string,
	dormitorios: PropTypes.string,
	bathrooms: PropTypes.string,
	ciudad: PropTypes.string,
	provincia: PropTypes.string,
	descripcion: PropTypes.string
};
