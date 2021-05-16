import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const AlquilaTuPropiedad = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const history = useHistory();
	const titulo = actions.getFormValue("titulo");
	const calle = actions.getFormValue("calle");
	const numero = actions.getFormValue("numero");
	const ciudad = actions.getFormValue("ciudad");
	const codigoPostal = actions.getFormValue("codigoPostal");
	const provincia = actions.getFormValue("provincia");
	const [provincias, setProvincias] = useState(actions.getFormValue("provincias"));
	const [localidades, setLocalidades] = useState(actions.getFormValue("localidades"));

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
		fetch(API_URL + "/api/provincias", {
			method: "GET"
		})
			.then(response => response.json())
			.then(responseJson => {
				actions.setFormValue("provincias", Object.keys(responseJson));
				setProvincias(Object.keys(responseJson));
				actions.setFormValue("localidades", responseJson);
				setLocalidades(() => responseJson);
			});
	}, []);

	return (
		<div className="container mt-5">
			<div className="row mt-5 pt-5">
				<div className="col-6 offset-md-3 bg-white px-5 pt-5 pb-3 esquinasRedondasFormulario">
					<form>
						<div className="form-row">
							<h4>¿Cómo se llama tu Alojamiento?</h4>
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="titulo">Nombre de tu Alojamiento</label>
								<input
									type="text"
									value={titulo}
									name="titulo"
									className="form-control"
									id="titulo"
									onChange={event => actions.setFormValue(event.target.id, event.target.value)}
								/>
							</div>
						</div>
						<div className="form-row">
							<h4>¿Dónde se ubica?</h4>
						</div>
						<div className="form-row">
							<div className="form-group col-md-10">
								<label htmlFor="calle">Calle</label>
								<input
									type="text"
									value={calle}
									name="calle"
									className="form-control"
									id="calle"
									onChange={event => actions.setFormValue(event.target.id, event.target.value)}
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
									onChange={event => actions.setFormValue(event.target.id, event.target.value)}
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="provincia">Provincia</label>
								<select
									id="provincia"
									name="provincia"
									value={provincia}
									className="form-control"
									onChange={event => actions.setFormValue("provincia", event.target.value)}>
									<option>Selecciona Provincia</option>
									{provincias.length === 0
										? ""
										: provincias.map(provincia => {
												return <option key={provincia}>{provincia}</option>;
										  })}
								</select>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-md-8">
								<label htmlFor="ciudad">Localidad</label>
								<select
									id="Ciudad"
									name="Ciudad"
									value={ciudad}
									className="form-control"
									onChange={event => actions.setFormValue("ciudad", event.target.value)}>
									<option>Selecciona Localidad</option>
									{Object.keys(localidades).length === 0 ||
									provincia === "" ||
									provincia === "Selecciona Provincia"
										? ""
										: localidades[provincia].map(localidad => {
												return <option key={localidad}>{localidad}</option>;
										  })}
								</select>
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="codigoPostal">Código Postal</label>
								<input
									type="number"
									value={codigoPostal}
									className="form-control"
									id="codigoPostal"
									min="0"
									onChange={event => actions.setFormValue(event.target.id, event.target.value)}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
