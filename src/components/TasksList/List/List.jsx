import { Component } from "react";

import TaskItem from "../TaskItem/TaskItem";

import style from "./List.module.css";

class List extends Component {
  render() {
    // console.log(this.props)
    const { activeLink, deleteItem, completedTask, editTask, todos , } = this.props;
    return (
      <section className={style.todo}>
        <ul className={style.todo_list}>
          {todos.map((item) => {
            return (
              <TaskItem
                // {...item}
                item={item}
                key={item._id}
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
