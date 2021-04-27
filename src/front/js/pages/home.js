import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import { es } from "date-fns/locale";
import "react-nice-dates/build/style.css";

export const Home = () => {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	return (
		<div className="row">
			<div className="col-6 offset-md-3 bg-white px-5 py-4 mt-5 esquinasRedondas">
				<form>
					<div className="form-row">
						<div className="col-3">
							<label htmlFor="ubicacion">Ubicación</label>
							<input type="text" className="form-control" placeholder="¿A donde viajas?" id="ubicacion" />
						</div>
						<div className="col-5">
							<DateRangePicker
								startDate={startDate}
								endDate={endDate}
								onStartDateChange={setStartDate}
								onEndDateChange={setEndDate}
								minimumDate={new Date()}
								minimumLength={1}
								format="dd/MM/aaaa"
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
											/>
										</div>
									</div>
								)}
							</DateRangePicker>
						</div>
						<div className="col-2">
							<label htmlFor="huespedes">Huéspedes</label>
							<input type="number" className="form-control" placeholder="¿Cuantos?" id="huespedes" />
						</div>
						<div className="col-2 mt-2">
							<button type="button" className="btn btn-danger btn-block mt-4">
								Buscar
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
