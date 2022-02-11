import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";

import MainInput from "./MainInput";
import { ADD_TASK } from "../../../redux/actions";
// import store from "../../../redux/store";

class MainInputContainer extends Component {
  render() {
    const { addTask } = this.props;

    return <MainInput addTask={addTask} />;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (value) =>
      dispatch({ type: ADD_TASK, description: value, id: nanoid(10) }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainInputContainer);
