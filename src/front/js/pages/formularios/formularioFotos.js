import React, { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

export const FormularioFotos = props => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const [descripcionAlojamiento, setDescripcionAlojamiento] = useState("");
	const [huespedes, setHuespedes] = useState("");
	const [camas, setCamas] = useState("");
	const [bathroom, setBathrooms] = useState("");

	const onDrop = useCallback(() => {
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	isDragActive = true;

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? <p>Drop the files here ...</p> : <p>Drag drop some files here, or click to select files</p>}
		</div>
	);
};
