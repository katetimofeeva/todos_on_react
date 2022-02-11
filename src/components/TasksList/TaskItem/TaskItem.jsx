import React from "react";
import { Component } from "react";


import DeleteButton from "../ui/Deletebutton/DeleteButton";

import style from "../TaskItem/TaskItem.module.css";
import cn from "classnames";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveInput: false,
      value: this.props.item.description,
    };
  }

  onDblCLick = (e) => {
    this.setState({ isActiveInput: true });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleBlur = (attriute) => {
     
    this.setState({ isActiveInput: false });

    this.props.editTask(this.state.value, this.props.item.id, attriute );
  };

  handleKeyDown = (e,attriute ) => {
    if (e.keyCode === 13) {
     
      this.setState({ isActiveInput: false });
      this.props.editTask(this.state.value, this.props.item.id, attriute);
    }
  };

  handleCompletedTask = (id, completed) => {
    this.props.completedTask(id, completed);
  };

  render() {
    // console.log(this.props);
    const { item, completedTask, deleteTask } = this.props;

    const description = item.description.slice(0, 30);
    const activeClass = item.completed
      ? cn(style.item_task, style.active_task)
      : style.item_task;

    const hidden = this.state.isActiveInput
      ? cn(style.item_mark, style.hidden)
      : style.item_mark;

    return (
      <li className={style.todo_list_item}>
        <div className={style.wrapper}>
          <div className={hidden}>
            <input
              type="checkbox"
              className={style.checkbox}
              onChange={(e) =>
                this.handleCompletedTask(e, item.id, item.completed)
              }
              checked={item.completed}
              disabled={this.state.isActiveInput}
            />
            <label
              htmlFor={item.id}
              className={style.check_all_label}
              data-toggle="completed"
              onClick={(e) => completedTask(item.id, item.completed, e.currentTarget.getAttribute( 'data-toggle'))}
            ></label>
          </div>

          <div className={activeClass} onDoubleClick={this.onDblCLick}>
            {description}
            {this.state.isActiveInput ? (
              <input
                value={this.state.value}
                onChange={this.handleChange}
                data-toggle="description"
                autoFocus
                type="text"
                className={cn(style.item_task_value_active)}
                onBlur={(e) => this.handleBlur(e.currentTarget.getAttribute('data-toggle'))}
                onKeyDown={(e) => this.handleKeyDown(e, e.currentTarget.getAttribute('data-toggle'))}
              />
            ) : (
              <input
                type="text"
                className={style.item_task_value}
                value={this.state.value}
                onChange={this.handleChange}
              />
            )}
          </div>
          {!this.state.isActiveInput && (
            <DeleteButton
              todos={this.props.todos}
              key={item.id}
              id={item.id}
              deleteTask={(id) => deleteTask(id)}
            />
          )}
        </div>
      </li>
    );
  }
}

export default TaskItem;
