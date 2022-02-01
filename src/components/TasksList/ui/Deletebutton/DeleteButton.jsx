import { Component } from "react";

import style from '../../TaskItem/TaskItem.module.css'

class DeleteButton extends Component {
  handleDeleteItem = () => {
 
    this.props.deleteItem(this.props.item.id);

  };
// почему не поддтянулись стили
  render() {
  
 
    return (
      <div>
        <button className={style.delete}
         onClick={ this.handleDeleteItem}>
          ✖
        </button>
      </div>
    );
  }
}

export default DeleteButton;
