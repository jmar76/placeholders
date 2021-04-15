const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			accessToken: "",
			calle: "",
			numero: "",
			ciudad: "",
			codigoPostal: "",
			comunidad: "andalucia",
			dormitorios: "",
			huespedes: "",
			camas: "",
			bathrooms: "",
			descripcion: "",
			fotos: [],

			piscina: [],
			cocina: [],
			parking: [],
			wifi: [],
			tv: [],
			aire_acondicionado: [],
			calefaccion: [],
			chimenea: [],
			agua_caliente: [],
			zona_trabajo: []
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
				setStore({ calle: value.toLowerCase() });
			},
			setNumero: value => {
				let store = getStore();
				setStore({ numero: value });
			},
			setCiudad: value => {
				let store = getStore();
				setStore({ ciudad: value.toLowerCase() });
			},
			setCodigoPostal: value => {
				let store = getStore();
				setStore({ codigoPostal: value });
			},
			setComunidad: value => {
				let store = getStore();
				setStore({ comunidad: value.toLowerCase() });
			},
			setDormitorios: value => {
				let store = getStore();
				setStore({ dormitorios: value });
			},
			setHuespedes: value => {
				let store = getStore();
				setStore({ huespedes: value });
			},
			setCamas: value => {
				let store = getStore();
				setStore({ camas: value });
			},
			setBathrooms: value => {
				let store = getStore();
				setStore({ bathrooms: value });
			},
			setDescripcion: value => {
				let store = getStore();
				setStore({ descripcion: value });
			},
			setFotos: value => {
				let store = getStore();
				setStore({ fotos: value });
			},

			setPiscina: value => {
				let store = getStore();
				setStore({ piscina: value });
			},
			setCocina: value => {
				let store = getStore();
				setStore({ cocina: value });
			},
			setParking: value => {
				let store = getStore();
				setStore({ parking: value });
			},
			setWifi: value => {
				let store = getStore();
				setStore({ wifi: value });
			},
			setTv: value => {
				let store = getStore();
				setStore({ tv: value });
			},
			setAire_acondicionado: value => {
				let store = getStore();
				setStore({ aire_acondicionado: value });
			},
			setCalefaccion: value => {
				let store = getStore();
				setStore({ calefaccion: value });
			},
			setChimenea: value => {
				let store = getStore();
				setStore({ chimenea: value });
			},
			setAgua_caliente: value => {
				let store = getStore();
				setStore({ agua_caliente: value });
			},
			setZona_trabajo: value => {
				let store = getStore();
				setStore({ zona_trabajo: value });
			},

			getFormValues: () => {
				let store = getStore();
				let respuestas = {};
				let calle = store.calle;
				let numero = store.numero;
				let ciudad = store.ciudad;
				let codigoPostal = store.codigoPostal;
				let comunidad = store.comunidad;
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
					comunidad,
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
