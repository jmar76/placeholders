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
			<div className="container-fluid fondoDePantallaProfile">
				<div className="contenedorText ">
					<h1 className="texto pl-3">Compartir tu espacio es vivir</h1>
					<hr></hr>
					<p className="fuenteText pl-3">
						Hazte anfitrión y podrás transformar el espacio que no usas en una fuente de ingresos extra que
						te ayude a conseguir tus metas
					</p>
					<Link to="/signup">
						<button type="button" className="btn text-white estilosBoton " value="crear">
							Empieza ahora
						</button>
					</Link>
				</div>
			</div>
			<div className="container mt-5 ">
				<div className="contenedorTextoRealidad">
					<p>
						<strong>Haz realidad tu próxima aventura. Todo es posible como anfitrión.</strong>
					</p>
				</div>
			</div>

			<div className="container ">
				<div className="row pt-5">
					<div className="col-12  colorFondoProfile px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i className="fas fa-user sizePlanet "></i>
									<h4 className="pl-2 colorNombre">Bienvenido {name}</h4>
								</div>
								<p>
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
								<p>
									Nos adaptamos a su forma de trabajar, política de cancelaciones, anticipo, etc. Si
									no queda satisfecho, puede darse de baja en cualquier momento.
								</p>
							</div>
							<div className="contenedorSinExclusividad">
								<div className="row">
									<i className="fas fa-globe sizeSinExclusividad"></i>

									<h4 className="pl-2">Sin Exclusividad</h4>
								</div>
								<p>
									No exigimos exclusividad. Simplemente somos otro canal de venta para conseguir más
									reservas.
								</p>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i className="fas fa-headset sizePersonalizada"></i>

									<h4 className="pl-2">Atención Personalizada</h4>
								</div>
								<p>
									Gestionamos las reservas, las incidencias y estamos presentes en todo momento. Le
									asesoramos para ofrecer un mejor servicio al cliente.
								</p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<div className="row">
									<i className="far fa-grin-beam sizeTranquilidad"></i>

									<h4 className="pl-2">Para Tu Tranquilidad </h4>
								</div>
								<p>
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
								<p>
									Mayor visibilidad de su alojamiento a viajeros de toda Europa. Más del 95% de
									nuestros clientes son extranjeros con estancias superiores a una semana.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container text-dark mt-1 mb-5 ">
				<div className="row pt-5">
					<div className="col-12  colorFondoProfile px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group  row posicionamiento">
							<div className="contenedorConImagen ">
								<div className="row">
									<div className="borderCentrado ">
										<img
											src="https://www.familias.com/wp-content/uploads/2019/12/the-happier-you-are-the-less-critical-the-life-and-actions-of-others_credit-shutterstock-700x525.jpg"
											width="650px"
											height="485px"
											className="borderRadio"
										/>
									</div>
								</div>
							</div>
							<div className="contenedorFlexible ">
								<div className="contenedorParrafoUno pt-5">
									<h4>Empieza a soñar con tu nueva vida</h4>
									<p>
										Disfruta de la libertad de realizar una actividad por tu cuenta, sácate unos
										ingresos extra y haz amistades para siempre recibiendo a huéspedes.
									</p>
								</div>
								<div className="contenedorParrafoDos">
									<h4>Hospeda con total tranquilidad </h4>
									<p>
										Nuestro objetivo es que triunfes. Por eso, te ofrecemos asistencia 24 horas, 7
										días a la semana, y te proporcionamos formación, datos y herramientas
										personalizados. Además, la comunidad de anfitriones siempre estará dispuesta a
										echarte una mano.
									</p>
								</div>
							</div>
						</div>

						<div className="form-group row posicionamiento ">
							<div className="mt-3 contenedorOpinion ">
								<h3>
									No es como un trabajo con horario fijo, ni tampoco te ata a un mismo lugar. ¡Puedes
									hospedar incluso estando de viaje!
								</h3>
								<p>Mary, anfitriona en Ronda, Málaga</p>
							</div>

							<div className="contenedorProfile ">
								<h4>Da de Alta tu Alojamiento</h4>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Darse de alta es gratis.</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Asistencia 24 horas, 7 días</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Darse de alta son solo 15 minutos</p>
								</div>

								<Link to="/signup">
									<button type="button" className="btn text-white colorBotonProfile " value="crear">
										<strong>Empezar</strong>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5 fondoDePantallaDown">
				<div className="contenedorTexto">
					<h1 className="text pl-3">Empieza tu aventura como anfitrión</h1>
					<hr></hr>
					<p className="fuenteText mt-5 pt-3 pl-3">Vamos a configurar juntos tu anuncio.</p>
					<Link to="/signup">
						<button type="button" className="btn text-white estilosBoton " value="crear">
							Empieza ahora
						</button>
					</Link>
				</div>
			</div>
			<br></br>
			<br></br>
		</Fragment>
	);
};
export default Profile;
