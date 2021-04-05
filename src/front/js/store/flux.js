const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			accessToken: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			saveAccessToken: accessToken => {
				setStore({ accessToken: accessToken });
			},
			getAccessToken: () => {
				let store = getStore();
				return store.accessToken;
			}
		}
	};
};

export default getState;
