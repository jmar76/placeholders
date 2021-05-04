import React, { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { FaTimesCircle } from "react-icons/fa";

export const FormularioFotos = props => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const history = useHistory();
	const [files, setFiles] = useState(actions.getFormValue("fotos"));
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	useEffect(() => {
		actions.setFormValue("fotos", files);
	}, [files]);

	const borrarFotos = key => {
		let resultado = files.filter(file => file.path != key);
		setFiles(files => resultado);
	};

	const acceptedFileItems = files.map(file => (
		<li key={file.path}>
			<span className="pr-5" onClick={() => borrarFotos(file.path)}>
				<FaTimesCircle />
			</span>
			{file.path} - {file.size} bytes
		</li>
	));
	let responseOk = false;

	return (
		<div className="container mt-5">
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
							onDrop={acceptedFiles => {
								setFiles(files.concat(...acceptedFiles));
							}}
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
					{!mensaje ? <h4>Imágenes Seleccionadas</h4> : ""}
					{!mensaje ? <ul style={{ listStyleType: "none" }}>{acceptedFileItems}</ul> : ""}
				</div>
			</div>
		</div>
	);
};
