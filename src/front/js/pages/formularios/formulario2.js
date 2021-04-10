import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const FormularioCapacidadAlojamiento = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const [dormitorios, setDormitorios] = useState("");
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
									className="form-control"
									id="dormitorios"
									onChange={event => {
										setDormitorios(event.target.value);
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="huespedes">Huéspedes</label>
								<input
									type="number"
									className="form-control"
									id="huespedes"
									onChange={event => {
										setHuespedes(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="camas">Camas</label>
								<input
									type="number"
									className="form-control"
									id="camas"
									onChange={event => {
										setCamas(event.target.value);
									}}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="bathroom">Baños</label>
								<input
									type="number"
									className="form-control"
									id="bathroom"
									onChange={event => {
										setBathrooms(event.target.value);
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
