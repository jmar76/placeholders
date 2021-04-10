import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
	const API_URL = process.env.BACKEND_URL;
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const { actions } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
		fetch(API_URL + "/api/profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setEmail(responseJson.email));
	}, []);

	return (
		<div className="jumbotron">
			<div>
				<strong>Correo electrónico:</strong> {email}
			</div>
		</div>
	);
};
export default Profile;
