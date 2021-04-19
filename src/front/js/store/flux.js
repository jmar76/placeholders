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
				let piscina = store.piscina;
				let cocina = store.cocina;
				let parking = store.parking;
				let wifi = store.wifi;
				let tv = store.tv;
				let aire_acondicionado = store.aire_acondicionado;
				let calefaccion = store.calefaccion;
				let chimenea = store.chimenea;
				let agua_caliente = store.agua_caliente;
				let zona_trabajo = store.zona_trabajo;

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
					fotos,
					piscina,
					cocina,
					parking,
					wifi,
					tv,
					aire_acondicionado,
					calefaccion,
					chimenea,
					agua_caliente,
					zona_trabajo
				});
			}
		}
	};
};

export default getState;
