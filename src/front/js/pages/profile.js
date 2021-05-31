import React, { useState, useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/profile.scss";

const Profile = () => {
	const API_URL = process.env.BACKEND_URL;
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const { actions } = useContext(Context);
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		let accesstoken = actions.getAccessToken();
		if (!accesstoken) {
			history.push("/login");
			return;
		}
		fetch(API_URL + "/api/profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setName(responseJson.name));
	}, []);

	return (
		<Fragment>
			<div className="container-fluid fondoDePantallaProfiles">
				<div className="contenedorTextprofile ">
					<h1 className="textouno pl-3">Compartir tu espacio es vivir</h1>
					<hr></hr>
					<p className="fuenteText pl-3">
						Hazte anfitrión y podrás transformar el espacio que no usas en una fuente de ingresos extra que
						te ayude a conseguir tus metas
					</p>
					<Link to="/alquilaTuPropiedad">
						<button type="button" className="btn text-white estilosBotonprofile " value="crear">
							Empieza ahora
						</button>
					</Link>
				</div>
			</div>
			<div className="container mt-5 ">
				<div className="contenedorTextoRealidad">
					<p>
						<strong>Empieza como anfitrión y disfruta de las ventajas</strong>
					</p>
				</div>
			</div>

			<div className="container mb-5">
				<div className="row pt-5">
					<div className="col-12  colorFondoProfile px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i className="fas fa-user sizePlanet "></i>
									<h4 className="pl-2 colorNombre">Bienvenido {name}</h4>
								</div>
								<p className="textjustify">
									Alquila tu propiedad con nosotros y disfruta de las enormes ventajas que te
									ofrecemos, a continuación te detallamos algunas de ellas, si deseas más información
									puedes ponerte en contacto con nosotros y un asesor resolverá tus dudas.
								</p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<div className="row">
									<i className="far fa-handshake sizeFlexible"></i>
									<h4 className="pl-2">Colaboración Flexible</h4>
								</div>
								<p className="textjustify">
									Nos adaptamos a su forma de trabajar, política de cancelaciones, anticipo, etc. Si
									no queda satisfecho, puede darse de baja en cualquier momento.
								</p>
							</div>
							<div className="contenedorSinExclusividad">
								<div className="row">
									<i className="fas fa-globe sizeSinExclusividad"></i>

									<h4 className="pl-2">Sin Exclusividad</h4>
								</div>
								<p className="textjustify">
									No exigimos exclusividad. Simplemente somos otro canal de venta para conseguir más
									reservas.
								</p>
							</div>
						</div>

						<div className="form-group row posicionamiento mb-5">
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i className="fas fa-headset sizePersonalizada"></i>

									<h4 className="pl-2">Atención Personalizada</h4>
								</div>
								<p className="textjustify">
									Gestionamos las reservas, las incidencias y estamos presentes en todo momento. Le
									asesoramos para ofrecer un mejor servicio al cliente.
								</p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<div className="row">
									<i className="far fa-grin-beam sizeTranquilidad"></i>

									<h4 className="pl-2">Para Tu Tranquilidad </h4>
								</div>
								<p className="textjustify">
									Establece unas normas de la casa que los clientes tengan que aceptar antes de
									alojarse. Informa de la conducta inadecuada de un cliente si algo sale mal. Recibe
									ayuda 24 horas, todos los días.
								</p>
							</div>
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i className="fas fa-globe-africa sizePlaneta"></i>
									<h4 className="pl-2">Promoción Internacional</h4>
								</div>
								<p className="textjustify">
									Mayor visibilidad de su alojamiento a viajeros de toda Europa. Más del 95% de
									nuestros clientes son extranjeros con estancias superiores a una semana.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
		</Fragment>
	);
};
export default Profile;
