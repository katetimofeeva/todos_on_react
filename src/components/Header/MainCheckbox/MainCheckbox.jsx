import { Component } from "react";

import style from "./MainCheckbox.module.css";
import cn from "classnames";

export default class MainCheckbox extends Component {
  handleMarkToggleAllTaks = (e) => {
    this.props.checkedCompletedAllTask(e.target.checked);

    this.setState(() => ({
      isAllTaskCompleted: e.target.checked,
    }));
  };

  render() {
    let isAllCompleted;
    !this.props.todos.length
      ? (isAllCompleted = false)
      : (isAllCompleted = this.props.todos.every((item) => item.completed));

    return (
      <div>
        <input
          type="checkbox"
          id="input_header_check"
          className={style.checkbox_header}
          name="completed"
          checked={isAllCompleted}
          onChange={this.handleMarkToggleAllTaks}
        />
        <label htmlFor="input_header_check">
          <span
            className={
              this.props.todos.length
                ? style.span
                : cn(style.span, style.not_visibility)
            }
          >
            »
          </span>
        </label>
      </div>
    );
  }
}
