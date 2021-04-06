import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white ">Home</span>
			</Link>
			<Link to="/signup">
				<span className="navbar-brand mb-0 h1 text-white">Sign Up</span>
			</Link>
			<Link to="/login">
				<span className="navbar-brand mb-0 h1 text-white">Log In</span>
			</Link>
			<Link to="/profile">
				<span className="navbar-brand mb-0 h1 text-white">Profile</span>
			</Link>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
