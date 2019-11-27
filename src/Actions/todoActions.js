import uuid from "uuid";

import {
	GET_TODOS,
	ADD_TODO,
	TOGGLE_COMPLETE,
	DELETE_TODO,
	APPLY_FILTER
} from "./actionTypes";

export const getTodos = () => {
	const todos = JSON.parse(localStorage.getItem("todos")) || [];

	return {
		type: GET_TODOS,
		payload: todos
	};
};

export const addTodo = title => {
	const newTodo = {
		id: uuid.v4(),
		title,
		completed: false
	};

	return {
		type: ADD_TODO,
		payload: newTodo
	};
};

export const toggleComplete = id => ({
	type: TOGGLE_COMPLETE,
	payload: id
});

export const deleteTodo = id => ({
	type: DELETE_TODO,
	payload: id
});

export const applyFilter = filterText => ({
	type: APPLY_FILTER,
	payload: filterText
});
