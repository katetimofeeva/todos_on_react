import { Component } from "react";
import { connect } from "react-redux";

import { SET_MARKER } from "../../../redux/actions";

import List from "./List";

class ListCountainer extends Component {
  render() {
    return (
      <List
        todos={this.props.todos}
        marker={this.props.marker}
        setMarkerAll={this.props.setMarkerAll}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    marker: state.marker,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setMarkerAll: () => {
      dispatch({ type: SET_MARKER, marker: "all" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCountainer);
// export default ListCountainer;
