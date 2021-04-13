import React, { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

export const FormularioFotos = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const history = useHistory();
	const [files, setFiles] = useState([]);
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	const acceptedFileItems = files.map(file => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));
	let responseOk = false;
	function handleSubmit() {
		// Post al back del formulario lleno, las variables van a estar en el flux
		const formData = new FormData();

		for (var i = 0; i < files.length; i++) {
			formData.append(i, files[i]);
		}

		fetch(API_URL + "/api/upload-images", {
			method: "POST",
			body: formData
		}).then(response => {
			responseOk = response.ok;
			if (response.ok) {
				setMensaje("Se subieron correctamente");
			}
			return response.json();
		});
		// .then(responseJson => {
		// 	if (!responseOk) {
		// 		setError(responseJson.message);
		// 	}
		// });
	}

	return (
		<div className="container">
			<div className="row mt-5 pt-5">
				<div className="col-6 offset-md-3 bg-white px-5 pt-5 pb-3 esquinasRedondasFormulario">
					<form>
						{mensaje ? (
							<div className="alert alert-success text-center" role="alert">
								{mensaje}
							</div>
						) : (
							""
						)}
						<label htmlFor="inputFotos">
							<h4>Añade fotos de tu alojamiento</h4>
						</label>
						<Dropzone
							onDrop={acceptedFiles =>
								acceptedFiles.forEach(element => {
									setFiles(files.concat(...acceptedFiles));
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
						<button
							type="button"
							className="btn btn-danger form-control"
							value="crear"
							onClick={handleSubmit}>
							<strong>Subir Archivos</strong>
						</button>
					</form>
					{!mensaje ? <h4>subir imagenes</h4> : ""}
					{!mensaje ? <ul>{acceptedFileItems}</ul> : ""}
					{/* <h4>subir imagenes</h4>
					<ul>{acceptedFileItems}</ul> */}
				</div>
			</div>
		</div>
	);
};
