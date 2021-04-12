const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			accessToken: "",
			calle: "",
			numero: "",
			ciudad: "",
			codigoPostal: "",
			comunidad: "Andalucia"
		},
		actions: {
			// Use getActions to call a function within a fuction
			saveAccessToken: accessToken => {
				setStore({ accessToken: accessToken });
				localStorage.setItem("access_token", accessToken);
			},
			getAccessToken: () => {
				let store = getStore();
				if (store.accessToken) {
					return store.accessToken;
				} else {
					return localStorage.getItem("access_token");
				}
			},
			deleteAccessToken: () => {
				let store = getStore();
				setStore({ accessToken: "" });
			},
			setCalle: value => {
				let store = getStore();
				setStore({ calle: value });
			},
			setNumero: value => {
				let store = getStore();
				setStore({ numero: value });
			},
			setCiudad: value => {
				let store = getStore();
				setStore({ ciudad: value });
			},
			setCodigoPostal: value => {
				let store = getStore();
				setStore({ codigoPostal: value });
			},
			setComunidad: value => {
				let store = getStore();
				setStore({ comunidad: value });
			}
		}
	};
};

export default getState;
