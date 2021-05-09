import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
// import "react-nice-dates/build/style.css";
import { CardAlojamiento } from "../component/cardAlojamiento";

export const VistaCard = () => {
	// const API_URL = process.env.BACKEND_URL;
	const { actions } = useContext(Context);
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [huespedes, setHuespedes] = useState("");
	const [provincia, setProvincia] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [resultado, setResultado] = useState([]);

	console.log(resultado);

	useEffect(() => {
		setResultado(actions.getFormValue("resultadosBusqueda"));
	}, []);

	return (
		<Fragment>
			<div className="row ml-5">
				{resultado.map(propiedad => {
					return (
						<div className="col-4 marginMisPropiedades pb-3" key={propiedad.id}>
							<CardAlojamiento
								// key={propiedad.id}
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

			{/* {resultado ? (
				<div className="row ml-5">
					{resultado.map(propiedad => {
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
			) : (
				"No se encontró nungún resultado"
			)} */}
		</Fragment>
	);
};
