import React, { useState, useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/profile.scss";
import { loadStripe } from "@stripe/stripe-js";
import PropTypes from "prop-types";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export const Pago = props => {
	const API_URL = process.env.BACKEND_URL;

	async function handleClick() {
		const stripe = await stripePromise;
		const response = await fetch(API_URL + "/api/create-checkout-session", {
			method: "POST"
		});
		const session = await response.json();
		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id
		});
		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	}

	return (
		<div className="text center mt-5">
			<div className="product">
				<img
					src="https://www.ceupe.com/images/easyblog_articles/2125/Turistas-espanoles.jpg"
					alt="The cover of Stubborn Attachments"
				/>
				<div className="description">
					<h3>Stubborn Attachments</h3>
					<h5>{props.precioFinal}€</h5>
				</div>
			</div>
			<button
				type="button"
				className="btn btn-success btn-block mt-4 mb-5"
				id="checkout-button"
				role="link"
				onClick={handleClick}>
				<strong>Reservar</strong>
			</button>
		</div>
	);
};
Pago.propTypes = {
	precioFinal: PropTypes.number
};
