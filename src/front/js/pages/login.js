import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
export const LogIn = () => {
	// const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const { actions } = useContext(Context);
	function login() {
		setError("");
		// if (password != confirmpass) {
		// 	setError("Las contraseñas no coinciden");
		// 	return;
		// }
		// let responseOk = false;
		fetch("https://3001-aquamarine-antlion-lo5rwf5k.ws-eu03.gitpod.io/api/login", {
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
