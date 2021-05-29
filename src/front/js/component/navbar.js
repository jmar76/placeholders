import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import andalucia from "../../img/andalucia.png";

export const Navbar = () => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const [name, setName] = useState("");

	useEffect(() => {
		fetch(API_URL + "/api/profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setName(responseJson.name));
	}, [actions.getAccessToken()]);
	let accesstoken = actions.getAccessToken();

	function logout() {
		localStorage.removeItem("access_token");
		actions.clearFormValues();
		actions.deleteAccessToken();
	}
	let usuario = <i className="fas fa-user navbar-brand mb-0 h1 text-dark" />;

	let barradNaturaleza = (
		<Link to="/dnaturaleza">
			<span className="navbar-brand my-2 my-lg-0 text-white fontsize">dNaturaleza</span>
		</Link>
	);

	let barraViajeros = (
		<Link to="/viajeros">
			<span className="navbar-brand my-2 my-lg-0 text-white fontsize">dViajeros</span>
		</Link>
	);
	let barradPueblos = (
		<Link to="/dpueblos">
			<span className="navbar-brand my-2 my-lg-0 text-white fontsize">dPueblos</span>
		</Link>
	);
	let barraSignup = (
		<Link to="/signup">
			<span className="navbar-brand my-2 my-lg-0 text-white fontsize">Regístrate</span>
		</Link>
	);
	let barraLogin = (
		<Link to="/login">
			<span className="navbar-brand my-2 my-lg-0 text-primary fontsize">Inicia Sesión</span>
		</Link>
	);
	let barraPropiedad = (
		<Link to="/agregarPropiedades">
			<span className="navbar-brand my-2 my-lg-0 text-warning fontsize">Alquila tu Propiedad</span>
		</Link>
	);
	let profile = (
		<Link to="/profile">
			<span className="navbar-brand mb-0 h1 text-white">Profile</span>
		</Link>
	);
	let dropdown = (
		<div className="dropdown ">
			<button
				className="btn btn-light"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				data-display="static"
				aria-haspopup="true"
				aria-expanded="false">
				<i className="fas fa-arrow-circle-down">
					{" "}
					{accesstoken ? usuario : ""}
					{accesstoken ? <span className="navbar-brand mb-0  text-dark font">{name}</span> : ""}
				</i>
			</button>
			<div className="dropdown-menu dropdown-menu-right " aria-labelledby="dropdownMenuButton">
				<Link to="/alquilaTuPropiedad" className="dropdown-item">
					Agregar Propiedades
				</Link>
				<Link className="dropdown-item" to="#">
					Favoritos
				</Link>
				<Link className="dropdown-item" to="/misPropiedades">
					Mis Propiedades
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
		<nav className="navbar navbar-expand-lg navbar-light fondonavbar  fixed-top text-white">
			<div className="collapse navbar-collapse">
				<Link to="/">
					<span className="navbar-brand h1 text-white">
						<h2>dturist.com</h2>
					</span>
				</Link>
				{/* <div className="ml-5 pl-5">
					<img src={andalucia} width="239px" height="81px" />
				</div> */}
			</div>
			<div className="navbar-nav mr-auto ">
				{!accesstoken ? barraViajeros : ""}
				{!accesstoken ? barradPueblos : ""}
				{!accesstoken ? barradNaturaleza : ""}
				{!accesstoken ? barraSignup : ""}
				{!accesstoken ? barraLogin : ""}
				{!accesstoken ? barraPropiedad : ""}

				{accesstoken ? profile : ""}
				{accesstoken ? dropdown : ""}
			</div>
		</nav>
	);
};
