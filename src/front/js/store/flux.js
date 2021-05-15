const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			accessToken: "",
			titulo: "",
			calle: "",
			numero: "",
			ciudad: "",
			codigoPostal: "",
			provincia: "",
			dormitorios: "",
			huespedes: "",
			camas: "",
			bathrooms: "",
			precio: "",
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
			mascotas: false,
			zona_trabajo: false,
			resultadosBusqueda: [],
			pathDescripcionMisPropiedades: ""
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
					titulo: "",
					numero: "",
					ciudad: "",
					codigoPostal: "",
					provincia: "",
					dormitorios: "",
					huespedes: "",
					camas: "",
					bathrooms: "",
					precio: "",
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
					mascotas: false,
					zona_trabajo: false
				});
			},
			getFormValues: () => {
				let store = getStore();
				let respuestas = {};
				let titulo = store.titulo;
				let calle = store.calle;
				let numero = store.numero;
				let ciudad = store.ciudad;
				let codigoPostal = store.codigoPostal;
				let provincia = store.provincia;
				let dormitorios = store.dormitorios;
				let huespedes = store.huespedes;
				let camas = store.camas;
				let bathrooms = store.bathrooms;
				let precio = store.precio;
				let descripcion = store.descripcion;
				let fotos = store.fotos;
				let amenidades = {
					piscina: store.piscina,
					cocina: store.cocina,
					parking: store.parking,
					wifi: store.wifi,
					tv: store.tv,
					aire_acondicionado: store.aire_acondicionado,
					calefaccion: store.calefaccion,
					chimenea: store.chimenea,
					mascotas: store.mascotas,
					zona_trabajo: store.zona_trabajo
				};

				let identifiers = Object.keys(amenidades);
				let activeAmenities = identifiers.filter(function(id) {
					return amenidades[id];
				});

				return (respuestas = {
					titulo,
					calle,
					numero,
					ciudad,
					codigoPostal,
					provincia,
					dormitorios,
					huespedes,
					camas,
					bathrooms,
					precio,
					descripcion,
					fotos,
					activeAmenities
				});
			}
		}
	};
};

export default getState;
