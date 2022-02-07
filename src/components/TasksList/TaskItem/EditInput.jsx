import React from "react";
import cn from "classnames";
import style from "../TaskItem/TaskItem.module.css";

export default class EditInput extends React.Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.handleChange}
        autoFocus
        type="text"
        className={cn(style.item_task_value_active)}
        onBlur={this.props.handleBlur}
        onKeyDown={this.props.handleKeyDown}
      />
    );
  }
}
