import React, { useState } from "react";

export const ForGot = () => {
	const [ëmail, setEmail] = useState("");
	const [ëmailError, setEmailError] = useState("");

	function requestForgotPassword(event) {
		if (email.trim() == "") {
			setEmailError("Email Obligatorio");
			return;
		}

		fetch("https://3001-coffee-parrot-7llnb4t6.ws-eu03.gitpod.io/api/forgot-password", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				email: email
			})
		});
	}

	let emailError = "";
	if (emailError) {
		emailError = (
			<div>
				<div>Email obligatorio</div>
			</div>
		);
	}

	return (
		<div className="jumbotron">
			<form>
				<label>
					Correo Electronico
					<input
						type="email"
						onChange={event => {
							setEmail(event.target.value);
						}}
					/>
					{emailError ? <span>{emailError}</span> : ""}
				</label>
				<input type="button" value="Recuperar" onClick={requestForgotPassword} />
			</form>
		</div>
	);
};
