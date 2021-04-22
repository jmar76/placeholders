import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container-fluid background">
			<div className="row mt-0 pt-5 fondo">
				<h1 className="posicionlema">Descubre Andalucía</h1>
			</div>
		</div>
	);
};
