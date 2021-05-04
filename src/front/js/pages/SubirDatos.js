import React, { Fragment } from "react";
import "../../styles/SubirDatos.scss";
import { Link } from "react-router-dom";
export const SubirDatos = () => {
	return (
		<Fragment>
			<div className="container mt-5">
				<div className="row bg-light contenedor mt-5">
					<div className="col-md-12 ">
						<div className="alert alert-success mt-4" role="alert">
							Los datos se han guardado correctamente!
						</div>
					</div>
					<div className="contenedorBotones ">
						<div className="">
							<Link to="/misPropiedades">
								<button className="btn btn-danger b mt-1  ml-5">Ir a mis propiedades</button>
							</Link>
							<Link to="/signup">
								<button className="btn btn-danger c mt-4  ml-5">Ir a mi perfil</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
