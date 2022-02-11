import { PureComponent } from "react";
import { connect } from "react-redux";

import Footer from "./Footer";
import { DELETE_ALL_TASKS } from "../../redux/actions";
import { SET_MARKER } from "../../redux/actions";

class FooterContainer extends PureComponent {
  render() {
    return (
      <Footer
        deleteAllTask={this.props.deleteAllTask}
        todos={this.props.todos}
        marker={this.props.marker}
        setMarker={this.props.setMarker}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    marker: state.marker,
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllTask: () => {
      dispatch({ type: DELETE_ALL_TASKS });
    },
    setMarker: (value) => dispatch({ type:SET_MARKER, marker: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
