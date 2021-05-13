import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const LogIn = props => {
	const API_URL = process.env.BACKEND_URL;
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const { actions } = useContext(Context);
	const history = useHistory();
	const location = useLocation();
	const [previousPath, setPreviousPath] = useState("");

	useEffect(() => {
		if (props.location.state != undefined) {
			setPreviousPath(() => props.location.state);
		}
	}, []);

	function login() {
		setError("");
		if (email == "") {
			setError("Introduce un email");
			return;
		}
		let responseOk = false;
		fetch(API_URL + "/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(response => {
				responseOk = response.ok;
				return response.json();
			})
			.then(responseJson => {
				if (responseOk) {
					actions.saveAccessToken(responseJson.access_token);
					history.push("/profile");
				} else {
					setError("Password incorrecta");
				}
			})
			.catch(error => {
				setError(error.message);
			});
		return false;
	}
	return (
		<div className="container marginLogin">
			<div className="row mt-5 pt-5">
				<div className="col-6 offset-md-3 bg-white px-5 pt-3 pb-3 esquinasRedondas">
					<form>
						<div className="form-group row">
							<h5 className="alineacionIniciaSesion">Inicia Sesión</h5>
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
								<label className="col-3 col-form-label" htmlFor="email">
									Email
								</label>
								<div className="col-sm-9">
									<input
										type="email"
										id="email"
										placeholder="Email"
										className="form-control"
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
										onChange={event => {
											setPassword(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-12">
									<button
										type="button"
										className="btn colorBotonIniciarSesion form-control colortexto"
										value="crear"
										onClick={login}>
										<strong>Iniciar Sesión</strong>
									</button>
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-12 d-inline text-center">
									<p className="d-inline">¿No tienes una cuenta?&nbsp; </p>
									<Link to="/signup" className="d-inline">
										<p className="d-inline">Crea una cuenta</p>
									</Link>
								</div>
								<div className="col-12 d-inline mb-5 text-center">
									<p className="d-inline">¿Olvidaste tu contraseña?&nbsp; </p>
									<Link to="/forgot" className="d-inline">
										<p className="d-inline">Recuperar</p>
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

LogIn.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
		state: PropTypes.object
	}).isRequired
};
