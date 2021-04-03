import React, { useState } from "react";

export const LogIn = () => {
	// const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");

	function login() {
		setError("");
		// if (password != confirmpass) {
		// 	setError("Las contraseñas no coinciden");
		// 	return;
		// }
		// let responseOk = false;
		fetch("https://3001-pink-aphid-rjd62ynl.ws-eu03.gitpod.io/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});
	}
	return (
		<div className="jumbotron">
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
			<input type="button" value="entrar" onClick={login} />
		</div>
	);
};
