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
		<div className="autores">
			<strong>
				<p>Autores:</p>
				<p>
					Antonio Cavadas ||{" "}
					<a target="_blank" rel="noopener noreferrer" href="https://es.linkedin.com/in/antonio-cavadas">
						https://es.linkedin.com/in/antonio-cavadas
					</a>
				</p>
				<p>
					José Manuel Agüero ||{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://es.linkedin.com/in/jos%C3%A9manuelag%C3%BCerorueda">
						https://es.linkedin.com/in/jos%C3%A9manuelag%C3%BCerorueda
					</a>
				</p>
				<p>
					Dario Nahuel Cruz ||{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://pt.linkedin.com/in/dar%C3%ADo-nahuel-cruz-713aa249">
						https://pt.linkedin.com/in/dar%C3%ADo-nahuel-cruz-713aa249
					</a>
				</p>
			</strong>
		</div>
	</footer>
);
