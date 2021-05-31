import React, { Fragment, useEffect } from "react";
import "../../styles/vistaAgregarPropiedades.scss";
import { Link } from "react-router-dom";

export const VistaAgregarPropiedades = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Fragment>
			<div className="container-fluid mb-5 fondoDePantallaDos">
				<div className="contenedorTextoAgregar">
					<h1 className="Agregartexto pl-3">
						<strong>Empieza tu aventura como anfitrión</strong>
					</h1>
					<hr></hr>
					<Link
						to={{
							pathname: "/signup",
							state: "/agregarPropiedades"
						}}>
						<button type="button" className="btn text-white estilosBotonagregar" value="crear">
							<strong>Empieza ahora</strong>
						</button>
					</Link>
				</div>
			</div>
			<div className="container mt-5 ">
				<div className="contenedorTextoRealidad marginAgregar">
					<p>
						<strong>Haz realidad tu próxima aventura. Todo es posible como anfitrión.</strong>
					</p>
				</div>
			</div>
			<div className="container marginAgrega">
				<div className="row pt-5 ">
					<div className="col-12  colorFondo px-5 pt-5 esquinasRedondas">
						<div className="form-group row  posicionamiento">
							<div className="contenedorPromocionInternacional">
								<div className="row">
									<i
										className="fas fa-globe-africa 
                                    sizePlaneta "></i>
									<h4 className="pl-2">Promoción Internacional</h4>
								</div>
								<p className="textjustify">
									Mayor visibilidad de su alojamiento a viajeros de toda Europa. Más del 95% de
									nuestros clientes son extranjeros con estancias superiores a una semana.
								</p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<div className="row">
									<i className="far fa-handshake sizeFlexible "></i>
									<h4 className="pl-2">Colaboración Flexible</h4>
								</div>
								<p className="textjustify">
									Nos adaptamos a su forma de trabajar, política de cancelaciones, anticipo, etc. Si
									no queda satisfecho, puede darse de baja en cualquier momento.
								</p>
							</div>
							<div className="contenedorSinExclusividad">
								<div className="row">
									<i className="fas fa-globe sizeSinExclusividad "></i>

									<h4 className="pl-2">Sin Exclusividad</h4>
								</div>
								<p className="textjustify">
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
							<div className="contenedorDarDeAlta ">
								<h4>Da de Alta tu Alojamiento</h4>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Darse de alta es gratis</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Asistencia 24 horas, 7 días</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Darse de alta son solo 15 minutos</p>
								</div>

								<Link
									to={{
										pathname: "/signup",
										state: "/agregarPropiedades"
									}}>
									<button type="button" className="btn colorBotonDardeAlta " value="crear">
										<strong>Empezar</strong>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container text-dark ">
				<div className="row ">
					<div className="col-12 colorFondoProfile px-5 pb-3 esquinasRedondas">
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
									<p className="textjustify">
										Disfruta de la libertad de realizar una actividad por tu cuenta, sácate unos
										ingresos extra y haz amistades para siempre recibiendo a huéspedes.
									</p>
								</div>
								<div className="contenedorParrafoDos">
									<h4>Hospeda con total tranquilidad </h4>
									<p className="textjustify">
										Nuestro objetivo es que triunfes. Por eso, te ofrecemos asistencia 24 horas, 7
										días a la semana, y te proporcionamos formación, datos y herramientas
										personalizados. Además, la comunidad de anfitriones siempre estará dispuesta a
										echarte una mano.
									</p>
								</div>
							</div>
						</div>

						<div className="form-group row posicionamiento ">
							<div className="mt-5 contenedorOpinion ">
								<h3 className="pt-5">
									<p className="fonsizeopinion">opiniones de propietarios</p>
									<i>
										No es como un trabajo con horario fijo, ni tampoco te ata a un mismo lugar.
										¡Puedes hospedar incluso estando de viaje!
									</i>
								</h3>
								<p>Mary, anfitriona en Ronda, Málaga</p>
							</div>

							<div className="borderCentrado ">
								<img
									src="https://st.depositphotos.com/2069237/2230/i/600/depositphotos_22309877-stock-photo-thinking-woman-isolated-on-white.jpg"
									width="350px"
									height="325px"
									className="borderRadio"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5 mt-5 fondoDePantallaDownAgregar">
				<div className="contenedorTextoAgregarimagen">
					<h1 className="textjuntosdos pt-5 pl-3">Empieza tu aventura como anfitrión</h1>
					<hr></hr>
					<p className="fuenteTextjuntosdos pl-3">
						<strong>Vamos a configurar juntos tu anuncio.</strong>
					</p>
					<Link to="/signup">
						<button type="button" className="btn text-white estilosBoton " value="crear">
							<strong>Empieza ahora</strong>
						</button>
					</Link>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</Fragment>
	);
};
