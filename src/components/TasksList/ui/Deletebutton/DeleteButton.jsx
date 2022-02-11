import { Component } from "react";

import style from "../../TaskItem/TaskItem.module.css";

class DeleteButton extends Component {
  handleDeleteItem = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <div>
        <button className={style.delete} onClick={this.handleDeleteItem}>
          ✖
        </button>
      </div>
    );
  }
}

export default DeleteButton;
