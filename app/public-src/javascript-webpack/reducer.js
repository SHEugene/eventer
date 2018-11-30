import { createStore } from 'redux';


function createEventerStore() {
	const q =	function (state = [], action) {
		if (action.type === 'ADD_TRACK') {
			return [
				...state,
				action.payload,
			];
		}
		return state;
	};
	return createStore(q);
}

export default createEventerStore;
