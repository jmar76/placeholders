import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { DatePickerCalendar } from "react-nice-dates";
import { enGB } from "date-fns/locale";
import "react-nice-dates/build/style.css";

export const Home = () => {
	const [date, setDate] = useState();
	/*return (
		<div className="row">
			<div className="col-6 offset-md-3 bg-white px-5 py-4 mt-5 esquinasRedondas">
				<form>
					<div className="form-row">
						<div className="col-3">
							<label htmlFor="aDondeViajas">Ubicación</label>
							<input
								type="text"
								className="form-control"
								placeholder="¿A donde viajas?"
								id="aDondeViajas"
							/>
						</div>
						<div className="col-3">
							<input type="text" className="form-control" placeholder="Last name" />
							<DatePicker date={date} onDateChange={setDate} locale={enGB}>
								{({ inputProps, focused }) => (
									<input className={"input" + (focused ? " -focused" : "")} {...inputProps} />
								)}
							</DatePicker>
						</div>
					</div>
				</form>
			</div>
		</div>
	);*/
};
