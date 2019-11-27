import React, { Component } from "react";
import { connect } from "react-redux";

import {
	getTodos,
	addTodo,
	toggleComplete,
	deleteTodo,
	applyFilter
} from "./Actions/todoActions";

// components
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddTodoForm from "./Components/AddTodoForm";
import Filter from "./Components/Filter";

//css
import "./App.css";

class App extends Component {
	state = {
		todoList: [],
		filterText: ""
	};

	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		return (
			<>
				<Header />
				<div className="container my-4">
					<AddTodoForm addTodo={this.props.addTodo} />
					<h4 className="mb-2">TODO List</h4>
					<Filter applyFilter={this.props.applyFilter} />
					<TodoList
						todos={this.props.todoList}
						filterText={this.props.filterText}
						toggleComplete={this.props.toggleComplete}
						deleteTodo={this.props.deleteTodo}
					/>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	todoList: state.todoList,
	filterText: state.filterText
});

export default connect(
	mapStateToProps,
	{ getTodos, addTodo, toggleComplete, deleteTodo, applyFilter }
)(App);
