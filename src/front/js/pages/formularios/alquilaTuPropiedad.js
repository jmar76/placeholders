import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const AlquilaTuPropiedad = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const calle = actions.getCalle();
	const numero = actions.getNumero();
	const ciudad = actions.getCiudad();
	const codigoPostal = actions.getCodigoPostal();
	const provincia = actions.getProvincia();

	function handleComunidad(newComunidad) {
		actions.setProvincia(newComunidad);
	}

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
							<h4>¿Dónde se ubica?</h4>
						</div>
						<div className="form-row">
							<div className="form-group col-md-10">
								<label htmlFor="calle">Calle</label>
								<input
									type="text"
									value={calle}
									className="form-control"
									id="calle"
									onChange={event => actions.setCalle(event.target.value)}
								/>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="numero">Número</label>
								<input
									type="number"
									value={numero}
									className="form-control"
									id="numero"
									min="0"
									onChange={event => actions.setNumero(event.target.value)}
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="comunidad">Provincia</label>
								<select
									id="comunidad"
									name="comunidad"
									value={provincia}
									className="form-control"
									onChange={event => handleComunidad(event.target.value)}>
									<option>Selecciona Provincia</option>
									<option>Almeria</option>
									<option>Cadiz</option>
									<option>Cordoba</option>
									<option>Granada</option>
									<option>Jaen</option>
									<option>Huelva</option>
									<option>Malaga</option>
									<option>Sevilla</option>
								</select>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-md-8">
								<label htmlFor="ciudad">Localidad</label>
								{provincia == "Almeria" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Abrucena</option>
										<option>Agua Amarga</option>
										<option>Berja</option>
										<option>Las Negras</option>
										<option>Lucainema de las Torres</option>
										<option>Mojacar</option>
										<option>Rodalquilar</option>
										<option>Velez-Blanco</option>
									</select>
								) : (
									""
								)}

								{provincia == "Cadiz" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Arcos de la Frontera</option>
										<option>Castellar de la Frontera</option>
										<option>Chipiona</option>
										<option>Grazalema</option>
										<option>Medina-Sidonia</option>
										<option>Olvera</option>
										<option>Sanlucar de Barrameda</option>
										<option>Vejer de la Frontera</option>
									</select>
								) : (
									""
								)}

								{provincia == "Cordoba" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Almodovar del Rio</option>
										<option>Baena</option>
										<option>Espejo</option>
										<option>Iznajar</option>
										<option>Luque</option>
										<option>Olvera</option>
										<option>Priego de Córdoba</option>
										<option>Zuheros</option>
									</select>
								) : (
									""
								)}

								{provincia == "Granada" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Albañuelas</option>
										<option>Castril</option>
										<option>Guadix</option>
										<option>Montefrio</option>
										<option>Nigüelas</option>
										<option>Nivar</option>
										<option>Pampaneira</option>
										<option>Salobreña</option>
										<option>Trevelez</option>
									</select>
								) : (
									""
								)}

								{provincia == "Jaen" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Alcala la Real</option>
										<option>Alcaudete</option>
										<option>Baeza</option>
										<option>Baños de la Encima</option>
										<option>Cazorla</option>
										<option>Hornos</option>
										<option>La Iruela</option>
										<option>Úbeda</option>
									</select>
								) : (
									""
								)}

								{provincia == "Huelva" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Alajar</option>
										<option>Almonaster La Real</option>
										<option>Ayamonte</option>
										<option>Aracena</option>
										<option>El Rocio-Almonte</option>
										<option>El Rompido</option>
										<option>Jagubo</option>
										<option>Moguer</option>
										<option>Palos de Frontera</option>
									</select>
								) : (
									""
								)}

								{provincia == "Malaga" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Antequera</option>
										<option>Archidona</option>
										<option>Casares</option>
										<option>Frigiliana</option>
										<option>Marbella</option>
										<option>Mijas</option>
										<option>Nerja</option>
										<option>Ojén</option>
										<option>Ronda</option>
									</select>
								) : (
									""
								)}

								{provincia == "Sevilla" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => actions.setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Aznalcazar</option>
										<option>Carmona</option>
										<option>Cazalla de la Sierra</option>
										<option>Constatina</option>
										<option>Ecija</option>
										<option>Estepa</option>
										<option>Lebrija</option>
										<option>Marchena</option>
										<option>Osuna</option>
										<option>Sanlucar La Mayor</option>
										<option>Santiponce</option>
										<option>Utrera</option>
									</select>
								) : (
									""
								)}
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="codigoPostal">Código Postal</label>
								<input
									type="number"
									value={codigoPostal}
									className="form-control"
									id="codigoPostal"
									min="0"
									onChange={event => actions.setCodigoPostal(event.target.value)}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
