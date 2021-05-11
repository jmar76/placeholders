import React, { useState, useEffect } from "react";
import "../../styles/signup.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const API_URL = process.env.BACKEND_URL;
	const [password, setPassword] = useState("");
	const [confirmpass, setConfirmpass] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const history = useHistory();
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");

	function crear() {
		setError("");
		if (password != confirmpass) {
			setError("Las contraseñas no coinciden");
			return;
		}

		let responseOk = false;
		fetch(API_URL + "/api/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				lastname: lastname,
				email: email,
				password: password
			})
		})
			.then(response => {
				responseOk = response.ok;
				if (response.ok) {
					history.push("/login");
				}
				return response.json();
			})
			.then(responseJson => {
				if (!responseOk) {
					setError(responseJson.message);
				}
			})
			.catch(error => {
				setError(error.message);
			});
	}
	return (
		<div className="container marginCrearCuenta">
			<div className="row mt-5 mb-5 pt-5">
				<div className="col-8 offset-md-2 bg-white px-5 pt-3 pb-3 esquinasRedondas">
					<form>
						<div className="form-group row">
							<h5 className="alineacion">Regístrate</h5>
						</div>
						<div className="form-group">
							{error ? (
								<div className="alert alert-danger text-center" role="alert">
									{error}
								</div>
							) : (
								""
							)}
							<div className="form-group row">
								<label className="col-3 col-form-label" htmlFor="nombre">
									Nombre
								</label>
								<div className="col-sm-9">
									<input
										type="nombre"
										id="nombre"
										placeholder="Nombre"
										className=" form-control"
										required
										onChange={event => {
											setName(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-3 col-form-label" htmlFor="apellidos">
									Apellidos
								</label>
								<div className="col-sm-9">
									<input
										type="apellidos"
										id="apellidos"
										placeholder="Apellidos"
										className=" form-control"
										required
										onChange={event => {
											setLastname(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-3 col-form-label" htmlFor="email">
									Email
								</label>
								<div className="col-sm-9">
									<input
										type="email"
										id="email"
										autoComplete="username"
										placeholder="Email"
										className="form-control"
										required
										onChange={event => {
											setEmail(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-3 col-form-label" htmlFor="password">
									Password
								</label>
								<div className="col-sm-9">
									<input
										type="password"
										id="password"
										placeholder="Password"
										className="form-control"
										required
										onChange={event => {
											setPassword(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-3 col-form-label" htmlFor="confirmPassword">
									Confirmar Password
								</label>
								<div className="col-sm-9">
									<input
										type="password"
										id="confirmPassword"
										placeholder="Confirmar Password"
										className=" form-control"
										required
										onChange={event => {
											setConfirmpass(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-group row ">
								<div className="col-sm-12 ">
									<button
										type="button"
										className="btn form-control colortexto colorBotonCrearCuenta"
										value="crear"
										onClick={crear}>
										<strong>Crear Cuenta</strong>
									</button>
								</div>
							</div>
							<div className="row mt-3 mb-5">
								<div className="col-12 d-inline text-center">
									<p className="d-inline">¿Ya tienes una cuenta?&nbsp; </p>
									<Link to="/login" className="d-inline">
										<p className="d-inline">Inicia Sesión</p>
									</Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
