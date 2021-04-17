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
			setCalle: value => {
				let store = getStore();
				setStore({ calle: value });
			},
			getCalle: () => {
				let store = getStore();
				return store.calle;
			},
			setNumero: value => {
				let store = getStore();
				setStore({ numero: value });
			},
			getNumero: () => {
				let store = getStore();
				return store.numero;
			},
			setCiudad: value => {
				let store = getStore();
				setStore({ ciudad: value });
			},
			getCiudad: () => {
				let store = getStore();
				return store.ciudad;
			},
			setCodigoPostal: value => {
				let store = getStore();
				setStore({ codigoPostal: value });
			},
			getCodigoPostal: () => {
				let store = getStore();
				return store.codigoPostal;
			},
			setComunidad: value => {
				let store = getStore();
				setStore({ comunidad: value });
			},
			getComunidad: () => {
				let store = getStore();
				return store.comunidad;
			},
			setDormitorios: value => {
				let store = getStore();
				setStore({ dormitorios: value });
			},
			getDormitorios: () => {
				let store = getStore();
				return store.dormitorios;
			},
			setHuespedes: value => {
				let store = getStore();
				setStore({ huespedes: value });
			},
			getHuespedes: () => {
				let store = getStore();
				return store.huespedes;
			},
			setCamas: value => {
				let store = getStore();
				setStore({ camas: value });
			},
			getCamas: () => {
				let store = getStore();
				return store.camas;
			},
			setBathrooms: value => {
				let store = getStore();
				setStore({ bathrooms: value });
			},
			getBathrooms: () => {
				let store = getStore();
				return store.bathrooms;
			},
			setDescripcion: value => {
				let store = getStore();
				setStore({ descripcion: value });
			},
			getDescripcion: () => {
				let store = getStore();
				return store.descripcion;
			},
			setFotos: value => {
				let store = getStore();
				setStore({ fotos: value });
			},
			getFotos: () => {
				let store = getStore();
				return store.fotos;
			},
			setPiscina: value => {
				let store = getStore();
				setStore({ piscina: value });
			},
			getPiscina: () => {
				let store = getStore();
				return store.piscina;
			},
			setCocina: value => {
				let store = getStore();
				setStore({ cocina: value });
			},
			getCocina: () => {
				let store = getStore();
				return store.cocina;
			},
			setParking: value => {
				let store = getStore();
				setStore({ parking: value });
			},
			getParking: () => {
				let store = getStore();
				return store.parking;
			},
			setWifi: value => {
				let store = getStore();
				setStore({ wifi: value });
			},
			getWifi: () => {
				let store = getStore();
				return store.wifi;
			},
			setTv: value => {
				let store = getStore();
				setStore({ tv: value });
			},
			getTv: () => {
				let store = getStore();
				return store.tv;
			},
			setAire_acondicionado: value => {
				let store = getStore();
				setStore({ aire_acondicionado: value });
			},
			getAire_acondicionado: () => {
				let store = getStore();
				return store.aire_acondicionado;
			},
			setCalefaccion: value => {
				let store = getStore();
				setStore({ calefaccion: value });
			},
			getCalefaccion: () => {
				let store = getStore();
				return store.calefaccion;
			},
			setChimenea: value => {
				let store = getStore();
				setStore({ chimenea: value });
			},
			getChimenea: () => {
				let store = getStore();
				return store.chimenea;
			},
			setAgua_caliente: value => {
				let store = getStore();
				setStore({ agua_caliente: value });
			},
			getAguaCaliente: () => {
				let store = getStore();
				return store.agua_caliente;
			},
			setZona_trabajo: value => {
				let store = getStore();
				setStore({ zona_trabajo: value });
			},
			getZona_trabajo: () => {
				let store = getStore();
				return store.zona_trabajo;
			},
			clearFormValues: () => {
				let store = getStore();
				setStore({
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
