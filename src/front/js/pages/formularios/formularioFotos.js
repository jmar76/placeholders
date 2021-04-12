import React, { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

export const FormularioFotos = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const [fotos, setFotos] = useState([]);

	const acceptedFileItems = fotos.map(file => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

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
						<label htmlFor="inputFotos">
							<h4>Añade fotos de tu alojamiento</h4>
						</label>
						<Dropzone
							onDrop={acceptedFiles =>
								acceptedFiles.forEach(element => {
									setFotos(fotos.concat(...acceptedFiles));
								})
							}
							accept={"image/*"}>
							{({ getRootProps, getInputProps }) => (
								<section>
									<div {...getRootProps()}>
										<input {...getInputProps()} />
										<span>&nbsp;</span>
										<p className="text-center">Arrastra tus imágenes o haz click para añadirlas</p>
										<span>&nbsp;</span>
									</div>
								</section>
							)}
						</Dropzone>
					</form>
					<h4>Archivos a Subir</h4>
					<ul>{acceptedFileItems}</ul>
				</div>
			</div>
		</div>
	);
};
