import React from "react";
import { Steps, Step } from "react-step-builder";
import PropTypes from "prop-types";

export const Navigation = props => {
	console.log(props.current);
	return (
		<div className="container">
			<div className="row ">
				<div className="col-6 offset-md-3 text-center bg-white esquinasRedondasNavigation pb-4">
					<button onClick={props.prev} className="btn btn-primary mr-5">
						Previous
					</button>
					<button onClick={props.next} className="btn btn-primary ml-5">
						Next
					</button>
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
