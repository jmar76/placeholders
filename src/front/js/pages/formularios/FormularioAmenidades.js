import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const FormularioAmenidades = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const descripcion = actions.getDescripcion();
	const piscina = actions.getPiscina();
	const cocina = actions.getCocina();
	const parking = actions.getParking();
	const wifi = actions.getWifi();
	const tv = actions.getTv();
	const aire_acondicionado = actions.getAire_acondicionado();
	const calefaccion = actions.getCalefaccion();
	const chimenea = actions.getChimenea();
	const agua_caliente = actions.getAguaCaliente();
	const zona_trabajo = actions.getZona_trabajo();

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
									value={descripcion}
									rows="5"
									onChange={event => {
										actions.setDescripcion(event.target.value);
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
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={piscina}
										id="piscina"
										onChange={event => {
											actions.setPiscina(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="piscina">
										Piscina
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={cocina}
										id="cocina"
										onChange={event => {
											actions.setCocina(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="cocina">
										Cocina
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={parking}
										id="parking"
										onChange={event => {
											actions.setParking(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="parking">
										Parking
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={wifi}
										id="wifi"
										onChange={event => {
											actions.setWifi(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="wifi">
										Wifi
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={tv}
										id="tv"
										onChange={event => {
											actions.setTv(event.target.checked);
										}}
									/>
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
										defaultChecked={aire_acondicionado}
										id="aireAcondicionado"
										onChange={event => {
											actions.setAire_acondicionado(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="aireAcondicionado">
										Aire acondicionado
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={calefaccion}
										id="calefaccion"
										onChange={event => {
											actions.setCalefaccion(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="calefaccion">
										Calefacción
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={chimenea}
										id="chimenea"
										onChange={event => {
											actions.setChimenea(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="chimenea">
										Chimenea
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={agua_caliente}
										id="aguaCaliente"
										onChange={event => {
											actions.setAgua_caliente(event.target.checked);
										}}
									/>
									<label className="form-check-label" htmlFor="aguaCaliente">
										Agua Caliente
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultChecked={zona_trabajo}
										id="zonaDeTrabajo"
										onChange={event => {
											actions.setZona_trabajo(event.target.checked);
										}}
									/>
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
