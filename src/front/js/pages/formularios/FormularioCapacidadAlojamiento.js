import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const FormularioCapacidadAlojamiento = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	let dormitorios = actions.getFormValue("dormitorios");
	let huespedes = actions.getFormValue("huespedes");
	let camas = actions.getFormValue("camas");
	let bathrooms = actions.getFormValue("bathrooms");

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	return (
		<div className="container mt-5">
			<div className="row mt-5 pt-5">
				<div className="col-6 offset-md-3 bg-white px-5 pt-5 pb-5 esquinasRedondasFormulario">
					<form>
						<div className="form-row">
							<div className="col-md-12">
								<h4>Danos algunos detalles más acerca de tu alojamiento</h4>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="dormitorios">Dormitorios</label>
								<input
									type="number"
									value={dormitorios}
									className="form-control"
									id="dormitorios"
									onChange={event => {
										actions.setFormValue(event.target.id, event.target.value);
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="huespedes">Huéspedes</label>
								<input
									type="number"
									value={huespedes}
									className="form-control"
									id="huespedes"
									onChange={event => {
										actions.setFormValue(event.target.id, event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="camas">Camas</label>
								<input
									type="number"
									value={camas}
									className="form-control"
									id="camas"
									onChange={event => {
										actions.setFormValue(event.target.id, event.target.value);
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="bathrooms">Baños</label>
								<input
									type="number"
									value={bathrooms}
									className="form-control"
									id="bathrooms"
									onChange={event => {
										actions.setFormValue(event.target.id, event.target.value);
									}}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
