import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { CardDescripcion } from "../component/cardDescripcion";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/descripcionMisPropiedades.scss";

export const DescripcionPropiedades = () => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const params = useParams();
	const [misPropiedades, setMisPropiedades] = useState([]);

	let info = {};
	for (let i = 0; i < misPropiedades.length; i++) {
		if (params.id == misPropiedades[i].id) {
			info = misPropiedades[i];
		}
	}
	let arrayAmenidades = [];
	let newArray = arrayAmenidades.concat(info.amenidades);

	useEffect(() => {
		fetch(API_URL + "/api/misPropiedades", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setMisPropiedades(responseJson));
	}, []);

	return (
		<Fragment>
			<div className="container bg-white">
				<div className="row pt-5">
					<div className="col-8  bg-white p px-5 pt-5 pb-3 esquinasRedondas">
						<div className="form-group row ">
							<div className="col-md-12 ">
								<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
									<ol className="carousel-indicators">
										<li
											data-target="#carouselExampleCaptions"
											data-slide-to="0"
											className="active"></li>
										<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
										<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
									</ol>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												src="https://i.pinimg.com/originals/14/14/a0/1414a076665216ea2f641f7d046eab09.jpg"
												width="500px"
												height="400px"
												className="d-block w-100"
												alt="..."
											/>
											<div className="carousel-caption d-none d-md-block">
												<h5>First slide label</h5>
												<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
											</div>
										</div>
										<div className="carousel-item">
											<img
												src="https://cf.bstatic.com/images/hotel/max1024x768/191/191209039.jpg"
												width="500px"
												height="400px"
												className="d-block w-100"
												alt="..."
											/>
											<div className="carousel-caption d-none d-md-block">
												<h5>Second slide label</h5>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
											</div>
										</div>
										<div className="carousel-item">
											<img
												src="https://casaydiseno.com/wp-content/uploads/2016/12/casas-rurales-decoracion-interior.jpg"
												width="500px"
												height="400px"
												className="d-block w-100"
												alt="..."
											/>
											<div className="carousel-caption d-none d-md-block">
												<h5>Third slide label</h5>
												<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
											</div>
										</div>
									</div>
									<a
										className="carousel-control-prev"
										href="#carouselExampleCaptions"
										role="button"
										data-slide="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="sr-only">Previous</span>
									</a>
									<a
										className="carousel-control-next"
										href="#carouselExampleCaptions"
										role="button"
										data-slide="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div>
							<div className="col-md-12 mt-3 contenedorNombreAlojamiento">
								<div className="row">
									<i className="fas fa-home mt-2 ml-3 pl-1  sizeCasa "></i>
									<h4 className="pl-2">{info.titulo}</h4>{" "}
								</div>
								<div className="row">
									<i className="fas fa-map-marker-alt ml-3 pl-2  sizeUbicacion"></i>
									<h5 className="pl-3">
										{info.ciudad}, {info.provincia}, (España)
									</h5>
								</div>
								<hr></hr>
								<div className="row justificado">
									<div className="contenedor items">
										<i className="fas fa-bath  sizeCasa"></i>
										<p className="#"> {info.bathrooms} Baños</p>
									</div>
									<div className="contenedor items">
										<i className="fas fa-users sizeCasa"></i>
										<p className="#"> {info.huespedes} Personas</p>
									</div>
									<div className="contenedor items">
										<i className="fas fa-bed sizeCasa"></i>
										<p className="#">{info.dormitorios} Dormitorios</p>
									</div>
									<div className="contenedor items">
										<i className="fas fa-paw sizeCasa"></i>
										<p className="#"> Mascotas</p>
									</div>
								</div>
							</div>
						</div>

						<div className="form-group row ">
							<div className="col-md-12 mt-3  ">
								<div className="row contenedorServicios pr-5">
									<h6 className="#">
										<strong>Servicios</strong>
									</h6>
									<ul className="text">
										<hr></hr>
										{newArray.map((amenidades, index) => {
											return (
												<i key={index} className="fas fa-check pl-5">
													{amenidades}
												</i>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
						<div className="form-group row ">
							<div className="col-md-12 mt-3 mb-3contenedorDescripcion">
								<div className="row">
									<h6 className="#">
										<strong>Descripción</strong>
									</h6>
								</div>
								<hr></hr>
								<p>{info.descripcion}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

DescripcionPropiedades.propTypes = {
	title: PropTypes.string,
	huespedes: PropTypes.string,
	dormitorios: PropTypes.string,
	bathrooms: PropTypes.string,
	ciudad: PropTypes.string,
	provincia: PropTypes.string,
	descripcion: PropTypes.string,
	id: PropTypes.string
};
