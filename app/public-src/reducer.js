import { createStore } from 'redux'
function playlist(state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.payload
		];
	}
	return state;
}

const store = createStore(playlist);

export  default store;