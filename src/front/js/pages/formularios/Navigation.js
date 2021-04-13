import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Steps, Step } from "react-step-builder";
import PropTypes from "prop-types";

export const Navigation = props => {
	const { actions } = useContext(Context);
	const values = actions.getFormValues();

	function handleSubmit() {
		console.log(values);
	}

	return (
		<div className="container">
			<div className="row ">
				<div className="col-6 offset-md-3 text-center bg-white esquinasRedondasNavigation pb-4">
					{props.current === 1 ? (
						""
					) : (
						<button
							onClick={props.prev}
							className={props.current === 4 ? "btn btn-primary" : "btn btn-primary mr-5"}>
							Anterior
						</button>
					)}
					{props.current === 4 ? (
						<button className="btn btn-success ml-5" onClick={handleSubmit}>
							Submit
						</button>
					) : (
						<button
							onClick={props.next}
							className={props.current === 1 ? "btn btn-primary" : "btn btn-primary ml-5"}>
							Siguiente
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

Navigation.propTypes = {
	prev: PropTypes.func,
	next: PropTypes.func,
	current: PropTypes.number
};
