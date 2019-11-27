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

let todos = JSON.parse(localStorage.getItem("todos")) || [];

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todoList: action.payload
			};

		case ADD_TODO:
			todos.unshift(action.payload);
			localStorage.setItem("todos", JSON.stringify(todos));

			return {
				...state,
				todoList: [action.payload, ...state.todoList]
			};

		case TOGGLE_COMPLETE:
			const todoList = state.todoList.map(todo => {
				if (todo.id === action.payload) todo.completed = !todo.completed;
				return todo;
			});
			localStorage.setItem("todos", JSON.stringify(todoList));
			return {
				...state,
				todoList
			};

		case DELETE_TODO:
			const newTodoList = state.todoList.filter(
				item => item.id !== action.payload
			);

			todos = todos.filter(item => item.id !== action.payload);
			localStorage.setItem("todos", JSON.stringify(todos));

			return {
				...state,
				todoList: newTodoList
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
