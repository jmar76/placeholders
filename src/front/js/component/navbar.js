import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { actions } = useContext(Context);
	const [name, setName] = useState("");

	useEffect(
		() => {
			fetch("https://3001-green-tarsier-x6z28oz4.ws-eu03.gitpod.io/api/profile", {
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
		<Link to="/">
			<span className="navbar-brand my-2 my-lg-0 text-warning">Alquila tu Propiedad</span>
		</Link>
	);
	// let htmlLogout = (
	// 	<div className="ml-auto">
	// 		<Link to="/">
	// 			<button className="btn btn-primary" onClick={logout}>
	// 				Cerrar Sesión
	// 			</button>
	// 		</Link>
	// 	</div>
	// );
	let profile = (
		<Link to="/profile">
			<span className="navbar-brand mb-0 h1 text-white">Profile</span>
		</Link>
	);
	return (
		<nav className="navbar navbar-expand-lg navbar-light text-white">
			<div className="collapse navbar-collapse">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white colorpuntocom">
						Home
						<spang className="colorpuntocom">.com</spang>
					</span>
				</Link>
			</div>
			<div className="navbar-nav mr-auto text-white">
				{!accesstoken ? barraSignup : ""}
				{!accesstoken ? barraLogin : ""}
				{!accesstoken ? barraPropiedad : ""}
				{accesstoken ? profile : ""}
				{accesstoken ? (
					<div className="dropdown">
						<button
							className="btn btn-outline-primary "
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							{" "}
							<i className="fas fa-arrow-circle-down">
								{" "}
								{accesstoken ? usuario : ""}{" "}
								{accesstoken ? <span className="navbar-brand mb-0 h1 text-warning"> {name}</span> : ""}
							</i>
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">
								Agregar propiedades
							</a>
							<a className="dropdown-item" href="#">
								favoritos
							</a>
							<a className="dropdown-item" href="#">
								Reservas
							</a>
							<Link to="/">
								<a className="dropdown-item" onClick={logout} href="#">
									Cerrar Sesión
								</a>
							</Link>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</nav>
	);
};
