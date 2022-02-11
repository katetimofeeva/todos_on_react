import { Component } from "react";
import { connect } from "react-redux";

import MainCheckbox from "./MainCheckbox";
import { COMPLETED_ALL_TASKS } from "../../../redux/actions";

class MainCheckboxContainer extends Component {
  render() {
    return (
      <MainCheckbox
        todos={this.props.todos}
        checkedCompletedAllTask={this.props.checkedCompletedAllTask}
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
    checkedCompletedAllTask: (value) => {
      dispatch({ type: COMPLETED_ALL_TASKS, completed: value });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCheckboxContainer);
