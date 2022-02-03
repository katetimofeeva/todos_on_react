import { Component } from "react";
import { nanoid } from "nanoid";

import Header from "../Header/Header";
import List from "../TasksList/List/List";
import Footer from "../Footer/Footer";
import { addToLS } from "../Utils/Utils";
import { getLS } from "../Utils/Utils";
import { postTodo, getResource,   } from "../Utils/Servise";

import style from "./Todo.module.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      visibleTask: [],
      marker: "all",
      isAllTaskCompleted: false,
       
    };
  }
  updateState = () => {
    getResource("http://localhost:3030").then((res) => {
      this.setState({
        todos: res,
      });
      console.log(res);
    });
  };

  deleteItem = (id) => {
    // console.log(id)
    postTodo("http://localhost:3030/delete", id);
    // this.setState({ todos: this.state.todos.filter((item) => item._id !== id) });
    this.updateState();
  };

  //rename +
  completedTask = (id, checked ) => {
    // const { todos } = this.state;
    console.log(id);
    console.log(!checked)
 
    // const newTodos = todos.map((item) => {
    //   if (item._id === id) {
    //     return {
    //       ...item,
    //       completed: !item.completed,
    //     };
    //   }
    //   return item;
    // });
   
       const callback = async () =>{
       await postTodo("http://localhost:3030/checked", JSON.stringify({id, checked: !checked }) );
       }
       callback()

    this.updateState()
    // this.setState({ todos: newTodos });
  }

  addTask = (value) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: nanoid(10),
          description: value,
          completed: false,
        },
      ],
    });
    postTodo(
      "http://localhost:3030",
      JSON.stringify({ description: value, completed: false })
    );
    this.updateState();
    // console.log(this.state.todos)
  };

  //rename
  completedAllTasks = (checked) => {
  
    this.setState(() => ({
      isAllTaskCompleted: checked,
      todos: this.state.todos.map((item) => {
        return {
          ...item,
          completed: checked,
        };
      }),
    }));
   
  };

  handleMarkerSelect = (marker) => {
    console.log(marker);

    this.setState({
      marker: marker,
    });
  };

  handleDeleteAllTask = () => {
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
      marker: "all",
    });
  };

  editTask = (value, id) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          description: value,
        };
      }
      return item;
    });

    if (value.trim().length === 0) {
      this.deleteItem(id);
    } else {
      this.setState({ todos: newTodos });
    }
  };

  componentDidMount() {
    if (getResource("http://localhost:3030")) {
      this.updateState();
    }

    // const todo = getLS("todos");
    // if (todo) {
    //   this.setState({
    //     todos: JSON.parse(todo),
    //     marker: JSON.parse(getLS("marker")),
    //   });
    // }
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
      addToLS("todos", JSON.stringify(this.state.todos));
      addToLS("marker", JSON.stringify(this.state.marker));
    }
    if (this.state.todos !== prevState.todos) {
      this.state.todos.every((item) => item.completed)
        ? this.setState({ isAllTaskCompleted: true })
        : this.setState({ isAllTaskCompleted: false });

      addToLS("todos", JSON.stringify(this.state.todos));
      addToLS("marker", JSON.stringify(this.state.marker));
    }
  }

  render() {
    console.log("------------render------------");
    const { todos, marker, visibleTask, isAllTaskCompleted, activeLink, } =
      this.state;

    const counterActiveTasks = todos.filter((item) => !item.completed).length;
    const counterCompletedTasks = todos.filter((item) => item.completed).length;

    return (
      <div className={style.todo}>
        <section className={style.main}>
          <Header
            todos={visibleTask}
            addTask={this.addTask}
            completedAllTasks={this.completedAllTasks}
            isAllTaskCompleted={isAllTaskCompleted}
          />

          <List
            todos={visibleTask}
            completedTask={this.completedTask}
            deleteItem={this.deleteItem}
            editTask={this.editTask}
            activeLinc={activeLink}
             
          />
        </section>

        <Footer
          counterActiveTasks={counterActiveTasks}
          counterCompletedTasks={counterCompletedTasks}
          handleMarkerSelect={this.handleMarkerSelect}
          handleDeleteAllTask={this.handleDeleteAllTask}
          todos={todos}
          marker={marker}
        />
      </div>
    );
  }
}

export default Todo;
