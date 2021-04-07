import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/login.scss";

export const LogIn = () => {
	// const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const { actions } = useContext(Context);
	const history = useHistory();

	function login() {
		setError("");
		if (email == "") {
			setError("Las contraseñas no coinciden");
			return;
		}
		let responseOk = false;
		fetch("https://3001-blue-hornet-u0kzmvoi.ws-eu03.gitpod.io/api/login", {
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
					setError(responseJson.message);
				}
			})
			.catch(error => {
				setError(error.message);
			});
		return false;
	}
	return (
		<div className="container">
			<div className="backgroundlogin">
				<div className="contenedorinputslogin">
					<div className="row ">
						<input
							type="email"
							placeholder="email"
							className="inputEmaillogin"
							onChange={event => {
								setEmail(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="password"
							placeholder="password"
							className="inputpasswordlogin"
							onChange={event => {
								setPassword(event.target.value);
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary posicionbotonlogin"
						value="iniciar sesión"
						onClick={login}>
						Iniciar Sesión
					</button>
				</div>
			</div>
		</div>
	);
};
