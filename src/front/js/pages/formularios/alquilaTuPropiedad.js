import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const AlquilaTuPropiedad = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const [calle, setCalle] = useState("");
	const [numero, setNumero] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [codigoPostal, setCodigoPostal] = useState("");
	const [comunidad, setComunidad] = useState("");

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
									className="form-control"
									id="calle"
									onChange={event => {
										setCalle(event.target.value);
									}}
								/>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="numero">Número</label>
								<input
									type="number"
									className="form-control"
									id="numero"
									min="0"
									onChange={event => {
										setNumero(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-8">
								<label htmlFor="ciudad">Ciudad</label>
								<input
									type="text"
									className="form-control"
									id="ciudad"
									onChange={event => {
										setCiudad(event.target.value);
									}}
								/>
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="codigoPostal">Código Postal</label>
								<input
									type="number"
									className="form-control"
									id="codigoPostal"
									min="0"
									onChange={event => {
										setCodigoPostal(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="comunidad">Comunidad</label>
								<select id="comunidad" className="form-control">
									<option>Andalucía</option>
									<option>Aragón</option>
									<option>Asturias</option>
									<option>Baleares</option>
									<option>Canarias</option>
									<option>Cantabria</option>
									<option>Castilla-La Mancha</option>
									<option>Castilla y León</option>
									<option>Cataluña</option>
									<option>Comunidad Valenciana</option>
									<option>Extremadura</option>
									<option>Galicia</option>
									<option>Madrid</option>
									<option>Murcia</option>
									<option>Navarra</option>
									<option>País Vasco</option>
									<option>La Rioja</option>
									<option>Ceuta</option>
									<option>Melilla</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
