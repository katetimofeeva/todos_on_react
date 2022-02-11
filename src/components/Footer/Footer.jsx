import { PureComponent } from "react";

import FilterTasks from "./FilterTasks/FilterTasks";

import style from "./Footer.module.css";
import cn from "classnames";

class Footer extends PureComponent {
  render() {
    
    const { setMarker, todos, deleteAllTask, marker } = this.props;
    const visibilityBtn = todos.some((item) => item.completed)
      ? cn(style.clear_completed)
      : cn(style.clear_completed, style.not_visibility);
    const visibilityFooter = todos.length
      ? cn(style.footer)
      : cn(style.footer, style.not_visibility);

    const counterActiveTasks = todos.filter((item) => !item.completed).length;
    const counterCompletedTasks = todos.filter((item) => item.completed).length;

    return (
      <footer className={visibilityFooter}>
        <span className={style.todo_active}>
          <strong>{counterActiveTasks}</strong> items left
        </span>
        <ul className={style.footer_buttons}>
          <FilterTasks setmarker={setMarker} marker={marker} />
        </ul>
        <button className={visibilityBtn} onClick={deleteAllTask}>
          Clear completed (<strong>{counterCompletedTasks}</strong>)
        </button>
      </footer>
    );
  }
}

export default Footer;
