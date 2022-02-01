import { Component } from "react";

import TaskItem from "../TaskItem/TaskItem";

import style from "./List.module.css";

class List extends Component {
  render() {
    // console.log(this.props)
    const { activeLink, deleteItem, completedTask, editTask } = this.props;
    return (
      <section className={style.todo}>
        <ul className={style.todo_list}>
          {this.props.todos.map((item) => {
            return (
              <TaskItem
                // {...item}
                item={item}
                key={item.id}
                deleteItem={deleteItem}
                completedTask={completedTask}
                activeLink={activeLink}
                editTask={editTask}
                
              />
            );
          })}
        </ul>
      </section>
    );
  }
}
export default List;
