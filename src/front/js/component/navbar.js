import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	useEffect(
		() => {
			fetch("https://3001-blue-hornet-u0kzmvoi.ws-eu03.gitpod.io/api/profile", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + actions.getAccessToken()
				}
			})
				.then(response => response.json())
				.then(responseJson => setEmail(responseJson.email));
		},
		[actions.getAccessToken()]
	);

	// const [token, setToken] = useState("");
	// const history = useHistory();
	let accesstoken = actions.getAccessToken();

	function logout() {
		localStorage.removeItem("access_token");
		actions.deleteAccessToken();
		// history.push("/login");
	}
	let usuario = <i className="fas fa-user navbar-brand mb-0 h1 text-warning" />;

	let barraSignup = (
		<Link to="/signup">
			<span className="navbar-brand mb-0 h1 text-white">Crea una Cuenta</span>
		</Link>
	);
	let barraLogin = (
		<Link to="/login">
			<span className="navbar-brand mb-0 h1 text-white">Inicia Sesión</span>
		</Link>
	);
	let barraPropiedad = (
		<Link to="/">
			<span className="navbar-brand mb-0 h1 text-warning">Alquila tu Propiedad</span>
		</Link>
	);
	let htmlLogout = (
		<div className="ml-auto">
			<Link to="/">
				<button className="btn btn-primary" onClick={logout}>
					Cerrar Sesión
				</button>
			</Link>
		</div>
	);

	let profile = (
		<Link to="/profile">
			<span className="navbar-brand mb-0 h1 text-white">Profile</span>
		</Link>
	);

	return (
		<nav className="navbar navbar-expand-lg navbar-light mb-3 text-white">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white">Home</span>
			</Link>
			{!accesstoken ? barraSignup : ""}
			{!accesstoken ? barraLogin : ""}
			{accesstoken ? profile : ""}
			{accesstoken ? usuario : ""}
			{accesstoken ? <span className="navbar-brand mb-0 h1 text-warning">{email}</span> : ""}
			{!accesstoken ? barraPropiedad : ""}
			{accesstoken ? htmlLogout : ""}
		</nav>
	);
};
