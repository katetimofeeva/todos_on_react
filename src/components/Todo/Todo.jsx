import React, { Component } from "react";


import Header from "../Header/Header";
import List from "../TasksList/List/List";
import Footer from "../Footer/Footer";
import store from "../../redux/store";
import {add} from '../../redux/actions'


import {
  getTodos,
  addTodo,
  deleteTask,
  completedTask,
  completedAllTasks,
  deleteAllTasks,
  editTask,
} from "../../Utils/Servise";

import style from "./Todo.module.css";

const {dispatch, subscribe, getState } = store;
dispatch(add)

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      visibleTask: [],
      marker: "all",
    };
  }

  getTodos = () => {
    getTodos().then((res) => {
      this.setState({
        todos: res,
      });
    });
   
    
  };

  deleteItem = (id) => {
    deleteTask(id);

    this.getTodos();
  };

  completedTask = (id, checked) => {
    completedTask(id, checked);

    this.getTodos();
  };

  addTask = (value) => {
    addTodo(value);
    this.getTodos();
  };

  completedAllTasks = (checked) => {
    completedAllTasks(checked);
    this.getTodos();
  };

  handleClick = (marker) => {
    this.setState({
      marker: marker,
    });
  };

  handleDeleteAllTask = () => {
    deleteAllTasks();

    this.getTodos();

    this.setState({
      marker: "all",
    });
  };

  editTask = (value, id) => {
    editTask(value, id);

    if (value.trim().length === 0) {
      this.deleteItem(id);
    }
    this.getTodos();
  };

  componentDidMount() {
    this.getTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.marker !== prevState.marker ||
      this.state.todos !== prevState.todos ||
      this.state.isAllTaskCompleted !== prevState.isAllTaskCompleted
    ) {
      switch (this.state.marker) {
        case "active":
          this.setState({
            visibleTask: this.state.todos.filter((item) => !item.completed),
          });
          break;
        case "completed":
          this.setState({
            visibleTask: this.state.todos.filter((item) => item.completed),
          });
          break;
        default:
          this.setState({ visibleTask: [...this.state.todos] });
          break;
      }
    }
    if (this.state.todos !== prevState.todos) {
      this.state.todos.every((item) => item.completed)
        ? this.setState({ isAllTaskCompleted: true })
        : this.setState({ isAllTaskCompleted: false });
    }
  }

  render() {
    console.log("------------render------------");

    const { todos, visibleTask, marker } = this.state;

    const counterActiveTasks = todos.filter((item) => !item.completed).length;
    const counterCompletedTasks = todos.filter((item) => item.completed).length;
    const isAllCompleted = todos.every((item) => item.completed);

    return (
      <div className={style.todo}>
        <section className={style.main}>
          <Header
            todos={visibleTask}
            addTask={this.addTask}
            completedAllTasks={this.completedAllTasks}
            isAllTaskCompleted={isAllCompleted}
          />

          <List
            todos={visibleTask}
            completedTask={this.completedTask}
            deleteItem={this.deleteItem}
            editTask={this.editTask}
          />
        </section>

        <Footer
          counterActiveTasks={counterActiveTasks}
          counterCompletedTasks={counterCompletedTasks}
          handleClick={this.handleClick}
          handleDeleteAllTask={this.handleDeleteAllTask}
          todos={todos}
          marker={marker}
        />
      </div>
    );
  }
}

export default Todo;
