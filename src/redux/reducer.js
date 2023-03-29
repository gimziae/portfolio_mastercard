import { combineReducers } from "redux";

// flickrReducer
const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case "SET_FLICKR":
			return { ...state, flickr: action.payload };
		default:
			return state;
	}
};

const reducers = combineReducers({
	flickrReducer,
});

export default reducers;
