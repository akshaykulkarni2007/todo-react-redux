import {
	GET_TODOS,
	ADD_TODO,
	TOGGLE_COMPLETE,
	DELETE_TODO,
	APPLY_FILTER
} from "../Actions/actionTypes";

const initialState = {
	todoList: [],
	filterText: ""
};

let todoList;

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todoList: action.payload
			};

		case ADD_TODO:
			todoList = [action.payload, ...state.todoList];
			localStorage.setItem("todos", JSON.stringify(todoList));
			return {
				...state,
				todoList
			};

		case TOGGLE_COMPLETE:
			todoList = state.todoList.map(todo => {
				if (todo.id === action.payload) todo.completed = !todo.completed;
				return todo;
			});
			localStorage.setItem("todos", JSON.stringify(todoList));
			return {
				...state,
				todoList
			};

		case DELETE_TODO:
			todoList = state.todoList.filter(todo => todo.id !== action.payload);
			localStorage.setItem("todos", JSON.stringify(todoList));
			return {
				...state,
				todoList
			};

		case APPLY_FILTER:
			return {
				...state,
				filterText: action.payload
			};

		default:
			return state;
	}
};
