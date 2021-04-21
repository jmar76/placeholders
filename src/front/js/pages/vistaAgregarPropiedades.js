import React, { Fragment } from "react";
import "../../styles/vistaAgregarPropiedades.scss";
import { Link } from "react-router-dom";

export const VistaAgregarPropiedades = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="row mt-0 pt-5">
					<div className="col-12  bg-white px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group row posicionamiento">
							<div className="contenedorPromocionInternacional">
								<h4>Promoción Internacional</h4>
								<p>
									Mayor visibilidad de su alojamiento a viajeros de toda Europa. Más del 95% de
									nuestros clientes son extranjeros con estancias superiores a una semana.
								</p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<h4>Colaboración Flexible</h4>
								<p>
									Nos adaptamos a su forma de trabajar, política de cancelaciones, anticipo, etc. Si
									no queda satisfecho, puede darse de baja en cualquier momento.
								</p>
							</div>
							<div className="contenedorSinExclusividad">
								<h4>Sin Exclusividad</h4>
								<p>
									No exigimos exclusividad. Simplemente somos otro canal de venta para conseguir más
									reservas.
								</p>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className="contenedorPromocionInternacional">
								<h4>Atención Personalizada</h4>
								<p>
									Gestionamos las reservas, las incidencias y estamos presentes en todo momento. Le
									asesoramos para ofrecer un mejor servicio al cliente.
								</p>
							</div>
							<div className="contenedorColaboracionFlexible">
								<h4>Tu Tranquilidad es Nuestra Prioridad</h4>
								<p>
									Establece unas normas de la casa que los clientes tengan que aceptar antes de
									alojarse. Informa de la conducta inadecuada de un cliente si algo sale mal. Recibe
									ayuda 24 horas, todos los días.
								</p>
							</div>
							<div className="contenedorSinExclusividad">
								<h4>Da de Alta tu Alojamiento</h4>
								<p>Darse de alta es gratis.</p>
								<p>Asistencia 24 horas por teléfono o e-mail. </p>
								<p>Darse de alta son solo 15 minutos</p>
								<Link to="/signup">
									<button type="button" className="btn colorBotonDardeAlta " value="crear">
										<strong>Empezar</strong>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
