import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import todoReducer from "./Reducers/todoReducer";

const initialState = {};
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	todoReducer,
	initialState,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
