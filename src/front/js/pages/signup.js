import React, { useState, useEffect } from "react";
import "../../styles/signup.scss";
import { useHistory } from "react-router-dom";
export const SignUp = () => {
	// const [name, setName] = useState("");
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
		fetch("https://3001-green-tarsier-x6z28oz4.ws-eu03.gitpod.io/api/signup", {
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
					alert("Su Cuenta ha sido Creada Correctamente!, Inicie Sesión");
					// setMessage("Su cuenta ha sido creada!");
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
		<div className="container">
			<div className="backgroundcrearcuenta">
				<div className="contenedorinputscrearcuenta">
					<div className="row ">
						{/* <h1>Crea tu cuenta!</h1> */}
						{error ? <h4>{error}</h4> : ""}
						{/* {message ? <h4> {message}</h4> : ""} */}
						{/* <input
                /> */}
					</div>
					<div className="row ">
						<input
							type="nombre"
							placeholder="nombre"
							className="inputnombrecrearcuenta"
							onChange={event => {
								setName(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="apellidos"
							placeholder="apellidos"
							className="inputapellidoscrearcuenta"
							onChange={event => {
								setLastname(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="email"
							placeholder="email"
							className="inputEmailcrearcuenta"
							onChange={event => {
								setEmail(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="password"
							placeholder="password"
							className="inputEmailcrearcuenta"
							onChange={event => {
								setPassword(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="password"
							placeholder="confirmar password"
							className="inputconfirmpasswordcrearcuenta"
							onChange={event => {
								setConfirmpass(event.target.value);
							}}
						/>
					</div>
					<div className="row">
						<button
							type="button"
							className="btn btn-primary posicionbotoncrearcuenta"
							value="crear"
							onClick={crear}>
							Crear Cuenta
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
