import React, { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

export const FormularioFotos = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	const onDrop = useCallback(() => {
		// Do something with the files
	}, []);

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	function handleSubmit() {
		// Post al back del formulario lleno, las variables van a estar en el flux
	}

	return (
		<div className="container">
			<div className="row mt-5 pt-5">
				<div className="col-6 offset-md-3 bg-white px-5 pt-5 pb-3 esquinasRedondasFormulario">
					<form>
						<label htmlFor="inputFotos" accept="image/png, image/jpeg">
							<h4>Añade fotos de tu alojamiento</h4>
						</label>
						<div {...getRootProps()}>
							<input id="inputFotos" {...getInputProps()} />
							{isDragActive ? (
								<div className="border">
									<p>
										Arrastralas aquí...
										<div>&nbsp;</div>
										<div>&nbsp;</div>
									</p>
								</div>
							) : (
								<div className="border">
									<p>
										Arrastra tus imágenes aquí o haz click para añadirlas
										<div>&nbsp;</div>
										<div>&nbsp;</div>
									</p>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
