import React, { useState, useEffect } from "react";
import "../../styles/signup.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
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
			setError("Las contraseñas no coinciden, pruebe de nuevo!");
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
					<div className="row errorstyles ">
						{/* <h1>Crea tu cuenta!</h1> */}
						{error ? <p>{error}</p> : ""}
						{/* {message ? <h4> {message}</h4> : ""} */}
						{/* <input
                        /> */}
					</div>
					<div className="row ">
						<input
							type="nombre"
							placeholder="Nombre"
							className="inputnombrecrearcuenta"
							onChange={event => {
								setName(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="apellidos"
							placeholder="Apellidos"
							className="inputapellidoscrearcuenta"
							onChange={event => {
								setLastname(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="email"
							placeholder="Email"
							className="inputEmailcrearcuenta"
							onChange={event => {
								setEmail(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="password"
							placeholder="Password"
							className="inputEmailcrearcuenta"
							onChange={event => {
								setPassword(event.target.value);
							}}
						/>
					</div>
					<div className="row ">
						<input
							type="password"
							placeholder="Confirmar Password"
							className="inputconfirmpasswordcrearcuenta"
							onChange={event => {
								setConfirmpass(event.target.value);
							}}
						/>
					</div>
					<div className="row">
						<button
							type="button"
							className="btn btn-danger posicionbotoncrearcuenta"
							value="crear"
							onClick={crear}>
							<strong>Crear Cuenta</strong>
						</button>
					</div>
					<div className="row positionlogin">
						<p>¿Ya tienes una cuenta? </p>
						<Link to="/login">
							{" "}
							<p> Inicia Sesión</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
