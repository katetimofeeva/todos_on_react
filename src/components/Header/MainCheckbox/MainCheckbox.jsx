import { Component } from "react";

import style from "./MainCheckbox.module.css";

export default class MainCheckbox extends Component {
  handleMarkToggleAllTaks = (e) => {
    this.props.completedAllTasks(e.target.checked);
  };
  
  render() {
    const { todos, isAllTaskCompleted } = this.props;
    return (
      <div className={todos.length ? "" : style.not_visibility}>
        <input
          type="checkbox"
          id="input_header_check"
          className={style.checkbox_header}
          name="completed"
          checked={isAllTaskCompleted}
          onChange={this.handleMarkToggleAllTaks}
        />
        <label htmlFor="input_header_check">
          <span className={style.span}>»</span>
        </label>
      </div>
    );
  }
}
