import React, { useState } from "react";

export const CrearUsuario = () => {
	const [nombre, setNombre] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpass, setConfirmpass] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");

	function crearusuario() {
		if (password != confirmpass) {
			setError("Las contraseñas no coinciden");
			return;
		}
	}

	return (
		<div className="jumbotron">
			{error ? <h1>{error}</h1> : ""}
			<input
				type="nombre"
				placeholder="nombre"
				onChange={event => {
					setNombre(event.target.value);
				}}
			/>
			<input
				type="email"
				placeholder="email"
				onChange={event => {
					setEmail(event.target.value);
				}}
			/>
			<input
				type="password"
				placeholder="password"
				onChange={event => {
					setPassword(event.target.value);
				}}
			/>
			<input
				type="password"
				placeholder="confirmar password"
				onChange={event => {
					setConfirmpass(event.target.value);
				}}
			/>
			<input type="button" value="crear" onClick={crearusuario} />
		</div>
	);
};
