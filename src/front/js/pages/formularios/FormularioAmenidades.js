import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const FormularioAmenidades = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const [descripcionAlojamiento, setDescripcionAlojamiento] = useState("");
	const [huespedes, setHuespedes] = useState("");
	const [camas, setCamas] = useState("");
	const [bathroom, setBathrooms] = useState("");

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	return (
		<div className="container">
			<div className="row mt-5 pt-5">
				<div className="col-6 offset-md-3 bg-white px-5 pt-5 pb-3 esquinasRedondasFormulario">
					<form>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="descripcionAlojamiento">
									<h4>Describe tu alojamiento</h4>
								</label>
								<textarea
									className="form-control"
									id="descripcionAlojamiento"
									rows="5"
									onChange={event => {
										setDescripcionAlojamiento(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="form-row">
							<h4>¿Qué amenidades tiene?</h4>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="piscina" />
									<label className="form-check-label" htmlFor="piscina">
										Piscina
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="cocina" />
									<label className="form-check-label" htmlFor="cocina">
										Cocina
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="parking" />
									<label className="form-check-label" htmlFor="parking">
										Parking
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="wifi" />
									<label className="form-check-label" htmlFor="wifi">
										Wifi
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="tv" />
									<label className="form-check-label" htmlFor="tv">
										TV
									</label>
								</div>
							</div>
							<div className="form-group col-md-6">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="aireAcondicionado"
									/>
									<label className="form-check-label" htmlFor="aireAcondicionado">
										Aire acondicionado
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="calefaccion" />
									<label className="form-check-label" htmlFor="calefaccion">
										Calefacción
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="chimenea" />
									<label className="form-check-label" htmlFor="chimenea">
										Chimenea
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="aguaCaliente" />
									<label className="form-check-label" htmlFor="aguaCaliente">
										Agua Caliente
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="zonaDeTrabajo" />
									<label className="form-check-label" htmlFor="zonaDeTrabajo">
										Zona para Trabajar
									</label>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
