import React from "react";
import { Component } from "react";
import EditInput from "./EditInput";

import DeleteButton from "../ui/Deletebutton/DeleteButton";

import style from "../TaskItem/TaskItem.module.css";
import cn from "classnames";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEdit: false, //rename
      value: this.props.item.description,
    };
  }

  onDblCLick = (e) => {
    this.setState({ activeEdit: true });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleBlur = () => {
    this.setState({ activeEdit: false });

    this.props.editTask(this.state.value, this.props.item.id);
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({ activeEdit: false });
      this.props.editTask(this.state.value, this.props.item.id);
    }
  };
  // active_task


  render() {
    const { item, completedTask, deleteItem } = this.props;

    const description = item.description.slice(0, 30);
    const clazz = item.completed? cn(style.item_task, style.active_task) : style.item_task;
    
    //visibility
    return (
      <li className={style.todo_list_item}>
        <div className={style.wrapper}>
          {this.state.activeEdit ? (
            <div className={style.sq}></div>
          ) : (
            <div className={style.item_mark}>
              <input
                type="checkbox"
                className={style.checkbox}
                onChange={() => completedTask(item.id)}
                checked={item.completed}
              />
              <label
                htmlFor={item.id}
                className={style.check_all_label}
                onClick={() => completedTask(item.id)}
              ></label>
            </div>
          )}
          <div className={clazz} onDoubleClick={this.onDblCLick}>
            {description}
            {this.state.activeEdit ? ( //disable
              <EditInput
                handleChange={this.handleChange}
                value={this.state.value}
                handleBlur={(id) => this.handleBlur(id)}
                handleKeyDown={this.handleKeyDown}
                id={item.id}
              />
            ) : (
              <input
                type="text"
                className={style.item_task_value}
              />
            )}
          </div>
          {!this.state.activeEdit && (
            <DeleteButton
              item={this.props.item}
              key={item.id}
              deleteItem={(id) => deleteItem(item.id)}
            />
          )}
        </div>
      </li>
    );
  }
}

export default TaskItem;
