import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Steps, Step } from "react-step-builder";
import { Navigation } from "./pages/formularios/Navigation";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { MisPropiedades } from "./pages/misPropiedades";
import { SignUp } from "./pages/signup";
import { LogIn } from "./pages/login";
import Profile from "./pages/profile";
import { AlquilaTuPropiedad } from "./pages/formularios/alquilaTuPropiedad";
import { FormularioCapacidadAlojamiento } from "./pages/formularios/FormularioCapacidadAlojamiento";
import { FormularioAmenidades } from "./pages/formularios/FormularioAmenidades";
import { FormularioFotos } from "./pages/formularios/formularioFotos";
import { ForGot } from "./pages/forgot";
import { VistaAgregarPropiedades } from "./pages/vistaAgregarPropiedades";
import { Viajeros } from "./pages/viajeros";
import { DescripcionPropiedades } from "./pages/descripcionMisPropiedades";

const Layout = () => {
	const config = {
		navigation: {
			component: Navigation,
			location: "after"
		}
	};

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/misPropiedades">
							<MisPropiedades />
						</Route>
						<Route exact path="/descripcionMisPropiedades/:id">
							<DescripcionPropiedades />
						</Route>
						<Route exact path="/agregarPropiedades">
							<VistaAgregarPropiedades />
						</Route>
						<Route exact path="/viajeros">
							<Viajeros />
						</Route>
						<Route exact path="/login">
							<LogIn />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/alquilaTuPropiedad">
							<Steps config={config}>
								<Step component={AlquilaTuPropiedad} />
								<Step component={FormularioCapacidadAlojamiento} />
								<Step component={FormularioAmenidades} />
								<Step component={FormularioFotos} />
							</Steps>
						</Route>
						<Route exact path="/forgot">
							<ForGot />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
