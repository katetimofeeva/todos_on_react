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
      activeInput: false, //rename
      value: this.props.item.description,
    };
  }

  onDblCLick = (e) => {
    this.setState({ activeInput: true });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleBlur = () => {
    this.setState({ activeInput: false });

    this.props.editTask(this.state.value, this.props.item._id);
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({ activeInput: false });
      this.props.editTask(this.state.value, this.props.item._id);
    }
  };
  // active_task


  render() {
    const { item, completedTask, deleteItem,  } = this.props;

    // const description = item.description.slice(0, 30);
    const clazz = item.completed? cn(style.item_task, style.active_task) : style.item_task;
    const hidden =  this.state.activeInput?  cn(style.item_mark, style.hidden): style.item_mark
    
    //visibility
    return (
      <li className={style.todo_list_item}>
        <div className={style.wrapper}>
                   
            <div className={hidden}>
              <input
                type="checkbox"
                className={style.checkbox}
                onChange={() => completedTask(item._id)}
                checked={item.completed}
                disabled={this.state.activeInput}
              />
              <label
                htmlFor={item._id}
                className={style.check_all_label}
                onClick={() => completedTask(item._id, item.completed)}
              ></label>
            </div>
          
          <div className={clazz} onDoubleClick={this.onDblCLick}>
            {item.description}
            {this.state.activeInput? ( //disable
              <EditInput
                handleChange={this.handleChange}
                value={this.state.value}
                handleBlur={(id) => this.handleBlur(id)}
                handleKeyDown={this.handleKeyDown}
                id={item._id}
              />
            ) : (
              <input
                type="text"
                className={style.item_task_value}
              />
            )}
          </div>
          {!this.state.activeInput && (
            <DeleteButton
              item={this.props.item}
              key={item._id}
              deleteItem={(id) => deleteItem(item._id)}
            />
          )}
        </div>
      </li>
    );
  }
}

export default TaskItem;
