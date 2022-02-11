import { Component } from "react";

import TaskItemContainer from "../TaskItem/TaskItemContainer";

import style from "./List.module.css";

class List extends Component {
  render() {
    const { deleteItem, completedTask, editTask, todos, marker } = this.props;
    const visibleTask = todos.filter((item) => {
      switch (marker) {
        case "active":
          return !item.completed;
        case "completed":
          return item.completed;
        default:
          return item;
      }
    });

    if (visibleTask.length === 0 && this.props.marker === 'complited') {
      console.log("ok");
      this.props.setMarkerAll();
    }

    return (
      <section className={style.todo}>
        <ul className={style.todo_list}>
          {visibleTask.map((item) => {
            return (
              <TaskItemContainer
                item={item}
                key={item.id}
                deleteItem={deleteItem}
                completedTask={completedTask}
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
