import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Steps, Step } from "react-step-builder";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navigation = props => {
	const { actions } = useContext(Context);
	const values = actions.getFormValues();
	const API_URL = process.env.BACKEND_URL;
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState("");
	const history = useHistory();

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	let responseOk = false;

	function handleSubmit() {
		fetch(API_URL + "/api/propiedades", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify({
				titulo: values.titulo,
				calle: values.calle,
				numero: values.numero,
				ciudad: values.ciudad,
				codigo_postal: values.codigoPostal,
				provincia: values.provincia,
				dormitorios: values.dormitorios,
				huespedes: values.huespedes,
				camas: values.camas,
				bathrooms: values.bathrooms,
				precio: values.precio,
				descripcion: values.descripcion,
				amenidades: values.activeAmenities
			})
		}).then(response => {
			responseOk = response.ok;
			actions.clearFormValues();
			return response.json();
		});

		const formData = new FormData();

		for (var i = 0; i < values.fotos.length; i++) {
			formData.append(i, values.fotos[i]);
		}

		fetch(API_URL + "/api/upload-images", {
			method: "POST",
			body: formData
		})
			.then(response => {
				responseOk = response.ok;
				if (response.ok) {
					setMensaje("Se subieron correctamente");
				}
				if (responseOk) {
					history.push("/misPropiedades");
					return;
				}
				return response.json();
			})
			.then(responseJson => {
				if (!responseOk) {
					setError(responseJson.message);
				}
			});
	}
	return (
		<div className="container">
			<div className="row ">
				<div className="col-6 offset-md-3 text-center bg-white esquinasRedondasNavigation pb-4">
					{props.current === 1 ? (
						""
					) : (
						<button
							onClick={props.prev}
							className={props.current === 4 ? "btn btn-primary" : "btn btn-primary mr-5"}>
							Anterior
						</button>
					)}
					{props.current === 4 ? (
						<button className="btn btn-success ml-5" onClick={handleSubmit}>
							Enviar
						</button>
					) : (
						<button
							onClick={props.next}
							className={props.current === 1 ? "btn btn-primary" : "btn btn-primary ml-5"}>
							Siguiente
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

Navigation.propTypes = {
	prev: PropTypes.func,
	next: PropTypes.func,
	current: PropTypes.number
};
