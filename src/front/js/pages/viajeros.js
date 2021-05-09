import React, { Fragment } from "react";
import "../../styles/viajeros.scss";
import { Link } from "react-router-dom";
export const Viajeros = () => {
	return (
		<Fragment>
			<div className="container-fluid mb-5 fondoDePantallaviajero">
				<div className="contenedorTexto"></div>
			</div>
			<div className="container marginViajeros">
				<div className="row ">
					<div className="col-12 colorFondoViajeros  px-5  pb-0 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="contenedorBienvenidosViajeros">
								<h1>Bienvenidos Viajeros!</h1>
								<p className="tamano">
									<strong>
										Descubre Andalucía y sácale mayor provecho a tus vacaciones con dturist.com
									</strong>
								</p>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className="contenedorBuscaReservaViaja">
								<div className="row">
									<i className="fas fa-search sizeLupa pt-1"></i>
									<h4 className="pl-2">
										<strong>Busca</strong>
									</h4>
								</div>
								<p>
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
								<p>
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
								<p>
									¡Prepárate para vivir unas vacaciones de ensueño! Disfruta de tu casa de vacaciones,
									la piscina, las vistas, el entorno, y descansa como nunca antes lo habías hecho.
								</p>
							</div>
							<div className="form-group row ">
								<div className="col-md-7 contenedorReservaYa">
									<div className="row">
										<i className="fas fa-luggage-cart sizeCarrito"></i>
										<h2 className="pl-3 pt-1">Haz tu Reserva ya!</h2>
									</div>

									<Link to="/">
										<button type="button" className="btn colorBotonReservarYa " value="crear">
											<strong>Empezar</strong>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container ">
				<div className="row justify-content-center">
					<strong>
						<h1>Descubre nuestras Promos!</h1>
					</strong>
				</div>
			</div>

			<div className="container ">
				<div className="row pt-5">
					<div className="col-12  colorFondoProfile px-5 pt-5 pb-3 esquinasRedondas">
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
							<div className="contenedorPromo">
								<div className="row justify-content-center">
									<h4 className="">Playas de Huelva</h4>
								</div>
								<p>Promo: Desde 49€/noche</p>
							</div>
							<div className="contenedorPromo">
								<div className="row justify-content-center">
									<h4 className="">Playas de Almeria</h4>
								</div>
								<p>Promo: Desde 51€/noche</p>
							</div>
							<div className="contenedorPromo">
								<div className="row justify-content-center">
									<h4 className="">Carzorla, Jaén</h4>
								</div>
								<p>Promo: Desde 55€/noche</p>
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
							<div className="contenedorPromo">
								<div className="row justify-content-center">
									<h4 className="">Ronda, Málaga</h4>
								</div>
								<p>Promo: Desde 49€/noche</p>
							</div>
							<div className="contenedorPromo">
								<div className="row justify-content-center">
									<h4 className="">Frigiliana, Málaga</h4>
								</div>
								<p>Promo: Desde 39€/noche</p>
							</div>
							<div className="contenedorPromo">
								<div className="row justify-content-center">
									<h4 className="">Montefrio, Granada</h4>
								</div>
								<p>Promo: Desde 39€/noche</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
