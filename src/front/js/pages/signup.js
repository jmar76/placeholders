import React, { useState } from "react";

export const SignUp = () => {
	// const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpass, setConfirmpass] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");

	function crear() {
		setError("");
		if (password != confirmpass) {
			setError("Las contraseñas no coinciden");
			return;
		}

		// let responseOk = false;
		fetch("https://3001-aquamarine-antlion-lo5rwf5k.ws-eu03.gitpod.io/api/signup", {
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
	// .then(response => {
	// 	responseOk = response.ok;
	// 	if (response.ok) {
	// 		setMessage("usuario registrado correctamente");
	// 	}
	// 	return response.json();
	// })
	// .then(responseJson => {
	// 	if (!responseOk) {
	// 		setError(responseJson.message);
	// 	}
	// })
	// .catch(error => {
	// 	setError(error.message);
	// });

	return (
		<div className="jumbotron">
			{error ? <h1>{error}</h1> : ""}
			{/* {message ? <h1> {message}</h1> : ""} */}
			{/* <input
				type="name"
				placeholder="name"
				onChange={event => {
					setName(event.target.value);
				}}
			/> */}
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
			<input type="button" value="crear" onClick={crear} />
		</div>
	);
};
