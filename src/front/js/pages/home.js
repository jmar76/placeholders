import React, { useContext, useState, Fragment, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import { es, tr } from "date-fns/locale";
import "react-nice-dates/build/style.css";
import { CardAlojamiento } from "../component/cardAlojamiento";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Home = () => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [huespedes, setHuespedes] = useState("");
	const [provincia, setProvincia] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [resultados, setResultados] = useState([]);
	const [error, setError] = useState(false);
	const titleRef = useRef();
	const [provincias, setProvincias] = useState(actions.getFormValue("provincias"));
	const [localidades, setLocalidades] = useState(actions.getFormValue("localidades"));

	if ("scrollRestoration" in history) {
		history.scrollRestoration = "manual";
	}
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		if (actions.getFormValue("provincias").length === 0) {
			fetch(API_URL + "/api/provincias", {
				method: "GET"
			})
				.then(response => response.json())
				.then(responseJson => {
					actions.setFormValue("provincias", Object.keys(responseJson));
					setProvincias(Object.keys(responseJson));
					actions.setFormValue("localidades", responseJson);
					setLocalidades(() => responseJson);
				});
		}
	}, []);

	function handleSearch() {
		titleRef.current.scrollIntoView({ behavior: "smooth" });
		fetch(API_URL + "/api/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				location: ciudad,
				capacidad: huespedes
			})
		})
			.then(response => response.json())
			.then(responseJson => {
				if (responseJson.length === 0) {
					actions.setFormValue("resultadosBusqueda", []);
					setError(true);
				} else {
					setError(false);
					actions.setFormValue("resultadosBusqueda", responseJson);
				}
			})
			.then(ok => setResultados(actions.getFormValue("resultadosBusqueda")));
	}
	return (
		<Fragment>
			<div className="container-fluid fondoDePantalla">
				<div className="row text-white margin">
					<div className="row contenedorFrase">
						<div className="col-md-10 pl-3 ">
							<h1 className="pl-4 text-white">
								<strong>Alquileres rurales en Andalucía</strong>
							</h1>
						</div>
					</div>
					<div className="col-10 colorFondoBusqueda offset-md-1 px-4 py-3 mt-2 esquinasRedondas">
						<form>
							<div className="form-row">
								<div className="col-2">
									<label htmlFor="provincia">Provincia</label>
									<select
										id="provincia"
										name="provincia"
										value={provincia}
										className="form-control"
										onChange={event => setProvincia(event.target.value)}>
										<option>Provincia</option>
										{provincias.map(provincia => {
											return <option key={provincia}>{provincia}</option>;
										})}
									</select>
								</div>
								<div className="col-3">
									<label htmlFor="ciudad">Localidad</label>
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Localidad</option>
										{Object.keys(localidades).length === 0 ||
										provincia === "" ||
										provincia === "Provincia"
											? ""
											: localidades[provincia].map(localidad => {
													return <option key={localidad}>{localidad}</option>;
											  })}
									</select>
								</div>
								<div className="col-3">
									<DateRangePicker
										startDate={startDate}
										endDate={endDate}
										onStartDateChange={setStartDate}
										onEndDateChange={setEndDate}
										minimumDate={new Date()}
										minimumLength={1}
										format="dd/MM/yyyy"
										locale={es}>
										{({ startDateInputProps, endDateInputProps, focus }) => (
											<div className="date-range">
												<div className="col-6 d-inline-block pl-0 pr-1">
													<label htmlFor="llegada">Llegada</label>
													<input
														className={
															"form-control input" +
															(focus === START_DATE ? " -focused" : "")
														}
														id="llegada"
														{...startDateInputProps}
														placeholder="Llegada"
														autoComplete="off"
													/>
												</div>
												<span className="date-range_arrow d-inline" />
												<div className="col-6 d-inline-block pr-0 pl-1">
													<label htmlFor="salida">Salida</label>
													<input
														className={
															" form-control input" +
															(focus === END_DATE ? " -focused" : "")
														}
														id="salida"
														{...endDateInputProps}
														placeholder="Salida"
														autoComplete="off"
													/>
												</div>
											</div>
										)}
									</DateRangePicker>
								</div>
								<div className="col-2">
									<label htmlFor="huespedes">Huéspedes</label>
									<input
										onChange={event => setHuespedes(event.target.value)}
										type="number"
										className="form-control"
										placeholder="Huéspedes"
										id="huesped"
									/>
								</div>
								<div className="col-2 mt-2">
									<button
										type="button"
										className="btn btn-warning btn-block mt-4"
										onClick={handleSearch}>
										<strong>¡Yo voy!</strong>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="row contenedorFrasehome">
					<div className="col-md-10 pl-3 ">
						<h4 className="pl-4 mt-2 pt-2 text-white centermargin">
							{" "}
							<span className="text-white">
								de viajes, de pueblos, de naturaleza,
								<strong> dturist.com</strong>
							</span>
						</h4>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row ml-5" ref={titleRef}>
					{error ? (
						<div className="col-12 mt-5">
							<div className="alert alert-warning mt-5" role="alert">
								No se encontraron resultados en este destino
							</div>
						</div>
					) : (
						""
					)}
					{resultados.map(propiedad => {
						return (
							<div className="col-12 mt-5 pb-3" key={propiedad.id}>
								<CardAlojamiento
									key={propiedad.id}
									title={propiedad.titulo}
									huespedes={propiedad.huespedes}
									ciudad={propiedad.ciudad}
									provincia={propiedad.provincia}
									dormitorios={propiedad.dormitorios}
									descripcion={propiedad.descripcion}
									bathrooms={propiedad.bathrooms}
									id={propiedad.id}
									calle={propiedad.calle}
									numero={propiedad.numero}
									codigo_postal={propiedad.codigo_postal}
									amenidades={propiedad.amenidades}
									precio={propiedad.precio}
									startDate={startDate}
									endDate={endDate}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="container-fluid">
				<div className="contenedorTextoRealidad mt-5 pt-5">
					<p>
						<strong>Disfruta de las mejores casas de vacaciones en Andalucía</strong>
					</p>
				</div>
			</div>{" "}
			<div className="container-fluid">
				<div className="contenedorTextoAndalucia mt-5">
					<p>
						<strong>Andalucía </strong>Andalucía reúne todo lo que estabas buscando. Un destino accesible,
						con excelentes conexiones y precios muy económicos. Aquí encontrarás el mejor clima de Europa,
						ciudades llenas de historia, populares monumentos reconocidos en todo el mundo, una arraigada
						cultura y tradiciones milenarias. En cuanto descubras los paisajes de Andalucía, te encantarán.
						Casi 1000 kilómetros de costa contrastan con las montañas del sur de España, mientras que sus
						parques naturales acogen la más exótica flora y fauna. Tanto busques relax, deportes o cualquier
						otra actividad, Andalucía es tu destino.
					</p>
					<hr></hr>
				</div>
			</div>{" "}
			<div className="container mt-3">
				<h1 className="alignTextpromo">¡echa un vistazo a nuestras promos!</h1>
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
			<div className="container mt-2">
				<h1 className="alignTextpromo">¡disfruta Andalucia!</h1>
			</div>
			<div className="container text-dark mt-5 mb-5 ">
				<div className="row ">
					<div className="col-12  colorFondoProfile px-5 pb-3 esquinasRedondas">
						<div className="form-group  row posicionamiento">
							<div className="contenedorConImagen ">
								<div className="row">
									<div className="borderCentrado ">
										<img
											src="https://viajes.nationalgeographic.com.es/medio/2019/07/10/torcal-de-antequera_62fa8a18_1500x1082.jpg"
											width="650px"
											height="485px"
											className="borderRadio"
										/>
									</div>
								</div>
							</div>
							<div className="contenedorFlexible ">
								<div className="contenedorParrafoUno pt-5">
									<h4>El Torcal de Antequera</h4>
									<p className="textjustify">
										El Torcal de Antequera es un paraje natural de 1171 ha (11,7 km²) situado en los
										términos municipales de Antequera y Villanueva de la Concepción de la provincia
										de Málaga, en Andalucía (España), y se lo conoce por las caprichosas formas que
										los diversos agentes erosivos han ido modelando en sus rocas calizas,
										constituyendo un destacado ejemplo de paisaje kárstico. Las formaciones
										vegetales originales del paraje natural Torcal de Antequera han sufrido, en
										mayor o menor medida, el efecto de diversas actividades humanas como el
										carboneo, el pastoreo, o la tala para la obtención de leñas. Como resultado, la
										vegetación climácica presenta cierta degradación, a lo que contribuyen las
										condiciones limitantes del sustrato.
									</p>
								</div>
							</div>
						</div>

						<div className="form-group row posicionamiento">
							<div className="mt-3 contenedorOpinion">
								<h3>Doñana, el parque por excelencia</h3>
								<p className="textjustify">
									Debido a su privilegiada situación geográfica entre dos continentes y su proximidad
									al lugar de encuentro del Atlántico y el Mediterráneo, el estrecho de Gibraltar, en
									Doñana se pueden observar más de 300 especies diferentes de aves a lo largo del año,
									al ser lugar de paso, cría e invernada para miles de ellas (acuáticas y terrestres)
									europeas y africanas. Aquí reposan aves acuáticas de toda Europa Occidental,
									localizándose infinidad de especies en las marismas y alrededores, procedentes de
									África y Europa.{" "}
								</p>
							</div>

							<div className="mov contenedorDoñana ">
								<img
									src="https://viajes.nationalgeographic.com.es/medio/2019/05/02/age-fotostock_aa012767_1080x747.jpg"
									width="390px"
									height="218px"
									className="borderRadio"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5 fondoDePantallaDor">
				<div className="contenedorT">
					<p className="pl-3 mt-5 pt-5">
						<strong>Playa de los Genoveses, Nijar (Almería)</strong>
					</p>
				</div>
			</div>
			<br></br>
			<br></br>
		</Fragment>
	);
};
