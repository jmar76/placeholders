import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const [name, setName] = useState("");

	useEffect(
		() => {
			fetch(API_URL + "/api/profile", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + actions.getAccessToken()
				}
			})
				.then(response => response.json())
				.then(responseJson => setName(responseJson.name));
		},
		[actions.getAccessToken()]
	);
	let accesstoken = actions.getAccessToken();

	function logout() {
		localStorage.removeItem("access_token");
		actions.deleteAccessToken();
	}
	let usuario = <i className="fas fa-user navbar-brand mb-0 h1 text-warning" />;

	let barraSignup = (
		<Link to="/signup">
			<span className="navbar-brand my-2 my-lg-0 text-white">Crea una Cuenta</span>
		</Link>
	);
	let barraLogin = (
		<Link to="/login">
			<span className="navbar-brand my-2 my-lg-0 text-white">Inicia Sesión</span>
		</Link>
	);
	let barraPropiedad = (
		<Link to="/alquilaTuPropiedad">
			<span className="navbar-brand my-2 my-lg-0 text-warning">Alquila tu Propiedad</span>
		</Link>
	);
	let profile = (
		<Link to="/profile">
			<span className="navbar-brand mb-0 h1 text-white">Profile</span>
		</Link>
	);
	let dropdown = (
		<div className="dropdown">
			<button
				className="btn btn-outline-primary "
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				<i className="fas fa-arrow-circle-down">
					{" "}
					{accesstoken ? usuario : ""}
					{accesstoken ? <span className="navbar-brand mb-0 h text-warning font"> {name}</span> : ""}
				</i>
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<Link to="/alquilaTuPropiedad" className="dropdown-item">
					Agregar Propiedades
				</Link>
				<Link className="dropdown-item" to="#">
					Favoritos
				</Link>
				<Link className="dropdown-item" to="#">
					Reservas
				</Link>
				<Link to="/" className="dropdown-item" onClick={logout}>
					Cerrar Sesión
				</Link>
			</div>
		</div>
	);
	return (
		<nav className="navbar navbar-expand-lg navbar-light text-white">
			<div className="collapse navbar-collapse">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white colorpuntocom">
						Home
						<span className="colorpuntocom">.com</span>
					</span>
				</Link>
			</div>
			<div className="navbar-nav mr-auto text-white">
				{!accesstoken ? barraSignup : ""}
				{!accesstoken ? barraLogin : ""}
				{!accesstoken ? barraPropiedad : ""}
				{accesstoken ? profile : ""}
				{accesstoken ? dropdown : ""}
			</div>
		</nav>
	);
};
