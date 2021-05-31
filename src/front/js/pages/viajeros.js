import React, { Fragment } from "react";
import "../../styles/viajeros.scss";
import { Link } from "react-router-dom";
export const Viajeros = () => {
	return (
		<Fragment>
			<div className="container-fluid fondoDePantallaviajero">
				<div className="contenedorTextoviajero ">
					<div className="textocontenedorfamilia">
						<p>
							<strong>Viajar es vivir.</strong> <span className="">disfruta con dturist.com</span>
						</p>
					</div>
					<hr></hr>
					<div className="contieneboton ">
						<Link to="/">
							<button type="button" className="btn btn-danger mr-2 estilosBotonagregar" value="crear">
								<strong>reserva ahora</strong>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="container marginViajeros">
				<div className="row ">
					<div className="col-12 colorFondoViajeros px-5  pb-0 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="contenedorBienvenidosViajeros">
								<h1 className="tamanoletraviajeros">¡Bienvenidos Viajeros!</h1>
								<p className="tamanoLetraAndaluciaDescubre pt-2">
									Descubre Andalucía y sácale mayor provecho a tus viajes con dturist.com
								</p>
								<p className="tamanoLetraAndaluciaDescubre mt-2 mb-5">
									tan sencillo como <strong>elegir-reservar-viajar</strong>
								</p>
							</div>
						</div>

						<div className="form-group row viajerosposicionamientocontenedores ">
							<div className="contenedorBuscaReservaViaja ">
								<div className="row">
									<i className="fas fa-search sizeLupa pt-1"></i>
									<h4 className="pl-2">
										<strong>Elegir</strong>
									</h4>
								</div>
								<p className="textjustify">
									Selecciona las fechas, el número de personas y tus preferencias. Descubrirás la
									mejor selección entre más de 2000 alojamientos en Andalucía.
								</p>
							</div>
							<div className="contenedorBuscaReservaViaja">
								<div className="row">
									<i className="far fa-calendar-alt sizecalendar pt-1"></i>
									<h4 className="pl-2">
										<strong>Reserva</strong>
									</h4>
								</div>
								<p className="textjustify">
									Encuentra la casa ideal para tus próximas vacaciones y reserva al instante. Sólo
									tendrás que pagar el anticipo.
								</p>
							</div>
							<div className="contenedorBuscaReservaViaja">
								<div className="row">
									<i className="fas fa-route sizeViaja pt-1"></i>
									<h4 className="pl-2">
										<strong>Viaja</strong>
									</h4>
								</div>
								<p className="textjustify">
									¡Prepárate para vivir unas vacaciones de ensueño! Disfruta de tu casa de vacaciones,
									la piscina, las vistas, el entorno, y descansa como nunca antes lo habías hecho.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container text-dark mt-2 mb-5 ">
				<div className="row ">
					<div className="col-12  colorFondoProfile px-5 pb-3 esquinasRedondas">
						<div className="form-group  row posicionamiento">
							<div className="contenedorConImagen">
								<div className="row">
									<div className="borderCentrado">
										<img
											src="https://blog.playasenator.com/wp-content/uploads/2018/02/shutterstock_225185140.jpg"
											width="650px"
											height="385px"
											className="borderRadio"
										/>
									</div>
								</div>
							</div>
							<div className="contenedorFlexibledpueblos ">
								<div className="contenedorParrafoUno pt-5">
									<h4>dpueblos</h4>
									<p className="textjustify">
										El sur de España está repleto de localidades con mucho encanto. Pueblos blancos,
										con balcones llenos de flores y casas encaramadas a lo alto de las montañas,
										desde donde se perciben vistas espectaculares de la costa y sus serranías. Hay
										que perderse por sus calles para descubrir su historia de mezcla de culturas.
									</p>
								</div>
								<Link to="/dpueblos">
									<button
										type="button"
										className="btn btn-primary mt-5 respirapueblosboton"
										value="crear">
										<strong>descubre dpueblos</strong>
									</button>
								</Link>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className=" bgdnaturaleza">
								<h3>dnaturaleza</h3>
								<p className="textjustify">
									Andalucía es una joya de la naturaleza en la que conviven diferentes tipos de
									vegetaciones y paisajes que la hacen única en España. Acantilados, playas de
									ensueño, sierras peculiares y un largo etcétera conforman su inmenso legado. Te
									proponemos veinte ejemplos de maravillas naturales de Andalucía. Buceemos juntos en
									los apasionantes ecosistemas del sur de Europa.{" "}
								</p>
								<Link to="/dnaturaleza">
									<button type="button" className="btn btn-primary" value="crear">
										<strong>descubre dnaturaleza</strong>
									</button>
								</Link>
							</div>

							<div className="contenedorDoñana ">
								<img
									src="https://blog.fuertehoteles.com/wp-content/uploads/2018/11/brena-natural-park.jpg"
									width="390px"
									height="218px"
									className="borderRadio"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr></hr>
			<div className="container ">
				<div className="row justify-content-center">
					<strong>
						<h1>descubre nuestras Promos!</h1>
					</strong>
				</div>
			</div>

			<div className="container ">
				<div className="row ">
					<div className="col-12  colorFondoProfile px-5 pt-5 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className=" mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://atomarpormundo.com/wp-content/uploads/2019/08/Playa-torre-lor-huelva.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://assets.afcdn.com/story/20190821/2020616_w944h530c1cx2376cy1584cxt0cyt0cxb4752cyb3168.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://fotos.hoteles.net/articulos/que-ver-y-que-hacer-en-cazorla-jaen-1482-1.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className="contenedorPromo pl-4">
								<div className="bgtext ">
									<h4 className="">Playas de Huelva</h4>
								</div>
								<div className="bgpromo">
									<p className="pt-2">
										{" "}
										<strong>Promo: Desde 49€/noche</strong>
									</p>
								</div>
							</div>
							<div className="contenedorPromo pl-3">
								<div className="bgtext ">
									<h4 className="">Playas de Almería</h4>
								</div>
								<div className="bgpromo">
									<p className="pt-2">
										{" "}
										<strong>Promo: Desde 59€/noche</strong>
									</p>
								</div>
							</div>
							<div className="contenedorPromo mr-4">
								<div className="bgtext ">
									<h4 className="">Cazorla, Jaén</h4>
								</div>
								<div className="bgpromo">
									<p className="pt-2">
										{" "}
										<strong>Promo: Desde 59€/noche</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container ">
				<div className="row ">
					<div className="col-12  colorFondoProfile px-5 pb-3 esquinasRedondas">
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
									src="https://i.blogs.es/bcc6a3/img_3573/840_560.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
							<div className="mov contenedorPromocionInternacional">
								<div className="row"></div>
								<img
									src="https://fotos.hoteles.net/articulos/que-ver-y-que-hacer-en-cazorla-jaen-1482-1.jpg"
									width="250px"
									height="185px"
									className="borderRadio"
								/>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className="contenedorPromo pl-4">
								<div className="bgtext ">
									<h4 className="">Ronda, Málaga</h4>
								</div>
								<div className="bgpromo">
									<p className="pt-2">
										{" "}
										<strong>Promo: Desde 59€/noche</strong>
									</p>
								</div>
							</div>
							<div className="contenedorPromo pl-3">
								<div className="bgtext ">
									<h4 className="">Frigiliana, Málaga</h4>
								</div>
								<div className="bgpromo">
									<p className="pt-2">
										{" "}
										<strong>Promo: Desde 79€/noche</strong>
									</p>
								</div>
							</div>
							<div className="contenedorPromo mr-4">
								<div className="bgtext ">
									<h4 className="">Montefrio, Granada</h4>
								</div>
								<div className="bgpromo">
									<p className="pt-2">
										{" "}
										<strong>Promo: Desde 69€/noche</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="form-group mb-5 row">
				<div className=" contenedorReserv mb-5">
					<Link to="/">
						<button type="button" className="btn btn-warning colorBotonReservarYa " value="crear">
							<strong className="pt-3 pb-3">¡quiero viajar!</strong>
						</button>
					</Link>
				</div>
			</div>
		</Fragment>
	);
};
