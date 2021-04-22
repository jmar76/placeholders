import React, { Fragment } from "react";
import "../../styles/viajeros.scss";
import { Link } from "react-router-dom";

export const Viajeros = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="row mt-2 pt-3">
					<div className="col-12  bg-white px-5 pt-3 pb-0 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="contenedorBienvenidosViajeros">
								<h1>Bienvenidos Viajeros!</h1>
								<p className="colorParrafoContenedorBienvenidosViajeros">
									<strong>Andalucía</strong> reúne todo lo que estabas buscando. Un destino accesible,
									con excelentes conexiones y precios muy económicos. Aquí encontrarás el mejor clima
									de Europa, ciudades llenas de historia, populares monumentos reconocidos en todo el
									mundo, una arraigada cultura y tradiciones milenarias. En cuanto descubras los
									paisajes de Andalucía, te encantarán. Casi 1000 kilómetros de costa contrastan con
									las montañas del sur de España, mientras que sus parques naturales acogen la más
									exótica flora y fauna. Tanto busques relax, deportes o cualquier otra actividad,
									Andalucía es tu destino.
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
										<i className="fas fa-luggage-cart text-success sizeCarrito"></i>
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
		</Fragment>
	);
};
