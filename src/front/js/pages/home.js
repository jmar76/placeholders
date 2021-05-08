import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import { es } from "date-fns/locale";
import "react-nice-dates/build/style.css";
import { CardAlojamiento } from "../component/cardAlojamiento";

export const Home = () => {
	const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [huespedes, setHuespedes] = useState("");
	const [provincia, setProvincia] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [resultados, setResultados] = useState([]);

	function handleSearch() {
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
			.then(responseJson => actions.setFormValue("resultadosBusqueda", responseJson))
			.then(ok => setResultados(actions.getFormValue("resultadosBusqueda")));
	}

	return (
		<Fragment>
			<div className="row text-white margin">
				<div className="col-6 colorFondoBusqueda offset-md-3 px-5 py-4 mt-5 esquinasRedondas">
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
									<option>Selecciona Provincia</option>
									<option>Almeria</option>
									<option>Cadiz</option>
									<option>Cordoba</option>
									<option>Granada</option>
									<option>Jaen</option>
									<option>Huelva</option>
									<option>Malaga</option>
									<option>Sevilla</option>
								</select>
							</div>
							<div className="col-2">
								<label htmlFor="ciudad">Localidad</label>
								{provincia == "Almeria" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Abrucena</option>
										<option>Agua Amarga</option>
										<option>Berja</option>
										<option>Las Negras</option>
										<option>Lucainema de las Torres</option>
										<option>Mojacar</option>
										<option>Rodalquilar</option>
										<option>Velez-Blanco</option>
									</select>
								) : (
									""
								)}
								{provincia == "" ? (
									<select className="form-control">
										<option>Selecciona Provincia</option>
									</select>
								) : provincia == "Selecciona Provincia" ? (
									<select className="form-control">
										<option>Selecciona Provincia</option>
									</select>
								) : (
									""
								)}
								{provincia == "Cadiz" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Arcos de la Frontera</option>
										<option>Castellar de la Frontera</option>
										<option>Chipiona</option>
										<option>Grazalema</option>
										<option>Medina-Sidonia</option>
										<option>Olvera</option>
										<option>Sanlucar de Barrameda</option>
										<option>Vejer de la Frontera</option>
									</select>
								) : (
									""
								)}

								{provincia == "Cordoba" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Almodovar del Rio</option>
										<option>Baena</option>
										<option>Espejo</option>
										<option>Iznajar</option>
										<option>Luque</option>
										<option>Olvera</option>
										<option>Priego de Córdoba</option>
										<option>Zuheros</option>
									</select>
								) : (
									""
								)}

								{provincia == "Granada" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Albañuelas</option>
										<option>Castril</option>
										<option>Guadix</option>
										<option>Montefrio</option>
										<option>Nigüelas</option>
										<option>Nivar</option>
										<option>Pampaneira</option>
										<option>Salobreña</option>
										<option>Trevelez</option>
									</select>
								) : (
									""
								)}

								{provincia == "Jaen" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Alcala la Real</option>
										<option>Alcaudete</option>
										<option>Baeza</option>
										<option>Baños de la Encima</option>
										<option>Cazorla</option>
										<option>Hornos</option>
										<option>La Iruela</option>
										<option>Úbeda</option>
									</select>
								) : (
									""
								)}

								{provincia == "Huelva" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Alajar</option>
										<option>Almonaster La Real</option>
										<option>Ayamonte</option>
										<option>Aracena</option>
										<option>El Rocio-Almonte</option>
										<option>El Rompido</option>
										<option>Jagubo</option>
										<option>Moguer</option>
										<option>Palos de Frontera</option>
									</select>
								) : (
									""
								)}

								{provincia == "Malaga" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Antequera</option>
										<option>Archidona</option>
										<option>Casares</option>
										<option>Frigiliana</option>
										<option>Marbella</option>
										<option>Mijas</option>
										<option>Nerja</option>
										<option>Ojén</option>
										<option>Ronda</option>
									</select>
								) : (
									""
								)}

								{provincia == "Sevilla" ? (
									<select
										id="Ciudad"
										name="Ciudad"
										value={ciudad}
										className="form-control"
										onChange={event => setCiudad(event.target.value)}>
										<option>Selecciona Localidad</option>
										<option>Aznalcazar</option>
										<option>Carmona</option>
										<option>Cazalla de la Sierra</option>
										<option>Constatina</option>
										<option>Ecija</option>
										<option>Estepa</option>
										<option>Lebrija</option>
										<option>Marchena</option>
										<option>Osuna</option>
										<option>Sanlucar La Mayor</option>
										<option>Santiponce</option>
										<option>Utrera</option>
									</select>
								) : (
									""
								)}
							</div>
							<div className="col-4">
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
														"form-control input" + (focus === START_DATE ? " -focused" : "")
													}
													id="llegada"
													{...startDateInputProps}
													placeholder="dd/mm/aaaa"
													autoComplete="off"
												/>
											</div>
											<span className="date-range_arrow d-inline" />
											<div className="col-6 d-inline-block pr-0 pl-1">
												<label htmlFor="salida">Salida</label>
												<input
													className={
														" form-control input" + (focus === END_DATE ? " -focused" : "")
													}
													id="salida"
													{...endDateInputProps}
													placeholder="dd/mm/aaaa"
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
									placeholder="¿Cuantos?"
									id="huespedes"
								/>
							</div>
							<div className="col-2 mt-2">
								<button type="button" className="btn btn-danger btn-block mt-4" onClick={handleSearch}>
									Buscar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="center pb-0">
				<h1 className="#">Alquileres rurales en Andalucía</h1>
			</div>
			<div className="row ml-5">
				{resultados.map(propiedad => {
					return (
						<div className="col-4 marginMisPropiedades pb-3" key={propiedad.id}>
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
							/>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};
