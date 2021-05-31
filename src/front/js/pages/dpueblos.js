import React, { Fragment, useEffect } from "react";
import "../../styles/dpueblos.scss";
import { Link } from "react-router-dom";
export const Dpueblos = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Fragment>
			<div className="container-fluid fondoDePantallaProfile">
				<div className="contenedorText ">
					<div className="subcontenedor ">
						<h1 className="pl-3 sizetextviajar">Viajar es vivir</h1>
					</div>
				</div>
			</div>
			<div className="container mt-5 ">
				<div className="contenedorTextoRealidad">
					<p>
						<strong>Haz realidad tu próxima aventura. Viaja con dturist.com</strong>
					</p>
				</div>
			</div>
			<div className="container mt-5 ">
				<div className="contenedorTextorincones">
					<p>
						<strong>Aquí tienes rincones para perderse...</strong>
					</p>
				</div>
			</div>

			<div className="container ">
				<div className="row pt-5">
					<div className="col-12  colorFondoProfile px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://www.ecestaticos.com/image/clipping/d37520c6d39c503d09fe5433611fcf67/hallan-dos-cuerpos-en-ronda-malaga-durante-la-busqueda-de-un-desaparecido.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://multimedia.andalucia.org/fotos/image_182936.jpeg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://www.ruralidays.com/images/imagenes_info/Frigiliana2.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
						</div>

						<div className="form-group row posicionamiento mt-5">
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://cdn2.civitatis.com/espana/almodovar-del-rio/galeria/torre-almena-almodovar-rio.jpg"
									width="250px"
									height="185px"
									className="borderRadio "
								/>
							</div>
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://i2.wp.com/ochosabores.com/wp-content/uploads/2019/06/carmo.jpg?fit=666%2C514&ssl=1"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://fotos.hoteles.net/articulos/ubeda-patrimonio-de-la-humanidad-2845-1.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
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
											src="https://www.guiadecadiz.com/movil/img/localidades/olvera/olvera00.jpg"
											width="650px"
											height="485px"
											className="borderRadio"
										/>
									</div>
								</div>
							</div>
							<div className="contenedorFlexible ">
								<div className="contenedorParrafoUno pt-5">
									<h4>Olvera, Cádiz</h4>
									<p className="textjustify">
										Situada en la Sierra Norte de Cádiz, Olvera se ha convertido en la Capital Rural
										2021. La localidad gaditana ha conseguido imponerse a los otros nueves
										finalistas —Daroca (Zaragoza), Yeste (Albacete), Taramundi (Asturias), Cuacos de
										Yuste (Cáceres), Aia (Gipuzkoa), Chelva (Valencia), Sepúlveda (Segovia),
										Ortigueira (A Coruña) y La Baronia de Rialb (Lleida)— al obtener 21.794 votos,
										el 18% de los 120.781 participantes en la votación. La cifra supera ampliamente
										la registrada en ediciones anteriores, y Olvera toma el testigo de la villa
										cántabra de Potes.
									</p>
								</div>
							</div>
						</div>

						<div className="form-group row posicionamiento ">
							<div className="mt-3 contenedorOpinion ">
								<p className="textjustify">
									En el término municipal de Olvera —rodeado de olivar de montaña y cientos de caminos
									rurales— finaliza la vía verde de la Sierra, una de las primeras en integrar la red
									de vías verdes españolas: 36,5 kilómetros de senda exclusiva para caminantes y
									ciclistas que parte de Puerto Serrano, en la vega del Guadalete, y sigue el antiguo
									trazado ferroviario Jerez-Almargen, que nunca fue usado. En su recorrido atraviesa
									cuatro viaductos, estaciones como las de Olvera, Coripe y Puerto Serrano,
									habilitadas como restaurantes y alojamientos rurales con servicio de alquiler de
									bicicletas, y 30 túneles, entre ellos el del Castillo, de casi un kilómetro de
									longitud.
								</p>
							</div>

							<div className="contenedorProfiles ">
								<h4>Reserva tu alojamiento!</h4>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Reserva tu alojamiento en Olvera</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Asistencia 24 horas, 7 días</p>
								</div>
								<div className="row">
									<i className="fas fa-check text-success pl-5"></i>
									<p className="pl-2">Cancelación gratis</p>
								</div>

								<Link to="/">
									<button type="button" className="btn text-white colorBotonProfile " value="crear">
										<strong>Reservar ahora!</strong>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-3">
				<div className="form-group  row posicionamiento">
					<div className="contenedorConImagen ">
						<div className="row">
							<div className="borderCentrado ">
								<img
									src="https://www.laprovinciadecadiz.com/images/phocagallery/LOCALIDADES/OLVERA/2017/17-04-12OLVERAFLORES/DSC00741.JPG"
									width="650px"
									height="485px"
									className="borderRadio"
								/>
							</div>
						</div>
					</div>
					<div className="contenedorFlexible ">
						<div className="contenedorParrafoUno pt-5">
							<p className="textjustify">
								Encaramada a las laderas de un risco coronado por un castillo de época nazarí y rodeada
								de olivares, en la Ruta de los Pueblos Blancos, el casco urbano de Olvera, declarado
								conjunto histórico artístico en 1983, es una amalgama de arquitectura histórica y
								popular, con casas enjalbegadas y calles empinadas que conducen hasta la citada
								fortaleza y la iglesia de Nuestra Señora de la Encarnación (del siglo XVIII) y miradores
								como el de los jardines del peñón del Sagrado Corazón.Para conocer la historia de la
								villa hay que visitar el museo La Frontera y los Castillos, en la antigua Casa de Cilla.
								Otra visita interesante es el santuario de Nuestra Señora de los Remedios, situado a la
								salida de la localidad.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-3 mb-5 fondoDePantallaDown">
				<div className="contenedorTexto">
					<h1 className="text pl-3">Empieza tu aventura en Olvera</h1>

					<p className="fuenteText mt-1 pt-3 pl-3">reservamos juntos.</p>
					<Link to="/">
						<button type="button" className="btn text-white estilosBoton " value="crear">
							<strong>Empieza ahora</strong>
						</button>
					</Link>
				</div>
			</div>
			<br></br>
			<br></br>
		</Fragment>
	);
};
