import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Steps, Step } from "react-step-builder";
import PropTypes from "prop-types";

export const Navigation = props => {
	const { actions } = useContext(Context);
	const values = actions.getFormValues();
	const API_URL = process.env.BACKEND_URL;
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
	}, []);

	let responseOk = false;

	function handleSubmit() {
		fetch(API_URL + "/api/provincias", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				comunidad: values.comunidad
			})
		}).then(response => {
			responseOk = response.ok;
			return response.json();
		});
		fetch(API_URL + "/api/localidad", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				ciudad: values.ciudad
			})
		}).then(response => {
			responseOk = response.ok;
			return response.json();
		});

		fetch(API_URL + "/api/amenidades", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				piscina: values.piscina,
				cocina: values.cocina,
				parking: values.parking,
				wifi: values.wifi,
				tv: values.tv,
				aire_acondicionado: values.aire_acondicionado,
				calefaccion: values.calefaccion,
				chimenea: values.chimenea,
				agua_caliente: values.agua_caliente,
				zona_trabajo: values.zona_trabajo
			})
		}).then(response => {
			responseOk = response.ok;
			return response.json();
		});

		fetch(API_URL + "/api/propiedades", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify({
				calle: values.calle,
				numero: values.numero,
				ciudad: values.ciudad,
				codigo_postal: values.codigoPostal,
				comunidad: values.comunidad,
				dormitorios: values.dormitorios,
				huespedes: values.huespedes,
				camas: values.camas,
				bathrooms: values.bathrooms,
				descripcion: values.descripcion
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
