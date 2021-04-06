import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [token, setToken] = useState("");
	const history = useHistory();
	let accesstoken = actions.getAccessToken();

	function logout() {
		localStorage.removeItem("access_token");
		actions.deleteAccessToken();
		history.push("/login");
	}

	let barraSignup = (
		<Link to="/signup">
			<span className="navbar-brand mb-0 h1 text-white">Sign Up</span>
		</Link>
	);
	let barraLogin = (
		<Link to="/login">
			<span className="navbar-brand mb-0 h1 text-white">Log In</span>
		</Link>
	);
	let htmlLogout = (
		<div className="ml-auto">
			<Link to="/login">
				<button className="btn btn-primary" onClick={logout}>
					Logout
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
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white ">Home</span>
			</Link>
			{!accesstoken ? barraSignup : ""}
			{!accesstoken ? barraLogin : ""}
			{accesstoken ? profile : ""}
			{accesstoken ? htmlLogout : ""}
		</nav>
	);
};
