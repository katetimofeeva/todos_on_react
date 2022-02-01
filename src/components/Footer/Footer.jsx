import { PureComponent } from "react";

import FilterTasks from "./FilterTasks/FilterTasks";

import style from "./Footer.module.css";
import cn from "classnames";

class Footer extends PureComponent {
  render() {
    console.log("render !!!!!!!!!!!!!");

    const {
      counterCompletedTasks,
      counterActiveTasks,
      handleMarkerSelect,
      todos,
      marker,
      handleDeleteAllTask,
    } = this.props;
    const visibilityBtn = todos.some((item) => item.completed) 
      ? cn(style.clear_completed)
      : cn(style.clear_completed, style.not_visibility);
    const visibilityFooter = todos.length
      ? cn(style.footer)
      : cn(style.footer, style.not_visibility);

    return (
      <footer className={visibilityFooter}>
        <span className={style.todo_active}>
          <strong>{counterActiveTasks}</strong> items left
        </span>
        <ul className={style.footer_buttons}>
          <FilterTasks
            handleMarkerSelect={handleMarkerSelect}
            todos={todos}
            marker={marker}
            handleDeleteAllTask={handleDeleteAllTask}
          />
        </ul>
        <button className={visibilityBtn} onClick={handleDeleteAllTask}>
          Clear completed (<strong>{counterCompletedTasks}</strong>)
        </button>
      </footer>
    );
  }
}

export default Footer;
