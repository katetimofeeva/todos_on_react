import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import TaskItem from "./TaskItem";
import { DELETE_TASK } from "../../../redux/actions";
import { TOGGLE_COMPLETE_TASK } from "../../../redux/actions";
import { EDIT_TASK } from "../../../redux/actions";

class TaskItemContainer extends Component {
  render() {
    return (
      <TaskItem
        {...this.props}
        completedTask={this.props.completedTask}
        deleteTask={this.props.deleteTask}
        editTask={this.props.editTask}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completedTask: (id, completed, attribute) => {
      // console.log(id)
      // console.log(completed)
      // console.log(attribute)
      dispatch({ type: TOGGLE_COMPLETE_TASK, completed, id, attribute });
    },
    deleteTask: (id) => dispatch({ type: DELETE_TASK, id: id }),
    editTask: (value, id, attribute) => {
      dispatch({ type: EDIT_TASK, description: value, id: id, attribute });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemContainer);
// export default TaskItemContainer;
