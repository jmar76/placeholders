import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

function Profile() {
	const [email, setEmail] = useState("");
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch("https://3001-aquamarine-antlion-lo5rwf5k.ws-eu03.gitpod.io/api/profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer" + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setEmail(responseJson.email));
	}, []);

	return (
		<div className="jumbotron">
			<div>
				Email:
				{email}
			</div>
		</div>
	);
}
export default Profile;
