const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			accessToken: "",
			calle: "",
			numero: "",
			ciudad: "",
			codigoPostal: "",
			provincia: "",
			dormitorios: "",
			huespedes: "",
			camas: "",
			bathrooms: "",
			descripcion: "",
			fotos: [],
			piscina: false,
			cocina: false,
			parking: false,
			wifi: false,
			tv: false,
			aire_acondicionado: false,
			calefaccion: false,
			chimenea: false,
			agua_caliente: false,
			zona_trabajo: false
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
			setFormValue: (target, value) => {
				let store = getStore();
				setStore({ [target]: value });
			},
			getFormValue: value => {
				let store = getStore();
				return store[value];
			},
			clearFormValues: () => {
				let store = getStore();
				setStore({
					calle: "",
					numero: "",
					ciudad: "",
					codigoPostal: "",
					provincia: "",
					dormitorios: "",
					huespedes: "",
					camas: "",
					bathrooms: "",
					descripcion: "",
					fotos: [],
					piscina: false,
					cocina: false,
					parking: false,
					wifi: false,
					tv: false,
					aire_acondicionado: false,
					calefaccion: false,
					chimenea: false,
					agua_caliente: false,
					zona_trabajo: false
				});
			},
			getFormValues: () => {
				let store = getStore();
				let respuestas = {};
				let calle = store.calle;
				let numero = store.numero;
				let ciudad = store.ciudad;
				let codigoPostal = store.codigoPostal;
				let provincia = store.provincia;
				let dormitorios = store.dormitorios;
				let huespedes = store.huespedes;
				let camas = store.camas;
				let bathrooms = store.bathrooms;
				let descripcion = store.descripcion;
				let fotos = store.fotos;
				let amenidades = [
					store.piscina,
					store.cocina,
					store.parking,
					store.wifi,
					store.tv,
					store.aire_acondicionado,
					store.calefaccion,
					store.chimenea,
					store.agua_caliente,
					store.zona_trabajo
				];

				console.log(amenidades);

				amenidades.forEach(amenidad => {
					if (amenidad === true) {
						console.log(amenidad);
					}
				});

				return (respuestas = {
					calle,
					numero,
					ciudad,
					codigoPostal,
					provincia,
					dormitorios,
					huespedes,
					camas,
					bathrooms,
					descripcion,
					fotos
				});
			}
		}
	};
};

export default getState;
