import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../../styles/pagoonline.scss";
import PropTypes from "prop-types";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.{}

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const ProductDisplay = ({ handleClick }) => (
	<section>
		<div className="product">
			<img src="https://i.imgur.com/EHyR2nP.png" alt="Paga tu reserva" />
			<div className="description">
				<h3>Casa increible</h3>
				<h5>20</h5>
			</div>
		</div>
		<button type="button" id="checkout-button" role="link" onClick={handleClick}>
			Paga ahora
		</button>
	</section>
);

const Message = ({ message }) => (
	<section>
		<p>{message}</p>
	</section>
);

export function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);

		if (query.get("success")) {
			setMessage("Pagado con exito! Vas a recibir un correo con la confirmación.");
		}

		if (query.get("canceled")) {
			setMessage("Pago cancelado, sigue navegando y paga tu reserva cuando tengas todo listo.");
		}
	}, []);

	const handleClick = async event => {
		const stripe = await stripePromise;

		const response = await fetch("/api/create-checkout-session", {
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
	};

	return message ? <Message message={message} /> : <ProductDisplay handleClick={handleClick} />;
}

ProductDisplay.propTypes = {
	handleClick: PropTypes.func
};

Message.propTypes = {
	message: PropTypes.func
};
