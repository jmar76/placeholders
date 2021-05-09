import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer fondoFooter mt-auto py-3 text-white text-center">
		<div className="contenedorFooter">
			<div className="contenedordturist">
				<h5>
					<i className="far fa-copyright text-white"></i>2021 dturist.com
				</h5>
			</div>
			<div className="contenedorRs">
				<i className="fab fa-facebook-f text-white"></i>
				<i className="fab fa-twitter pl-5 text-white"></i>
				<i className="fab fa-instagram pl-5 text-white"></i>
			</div>
		</div>
	</footer>
);
