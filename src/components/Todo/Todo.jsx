import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";

import FooterContainer from "../Footer/FooterContainer";

import ListCountainer from "../TasksList/List/ListCountainer";

import { getTodos } from "../../Utils/Servise";

import style from "./Todo.module.css";

class Todo extends Component {
  getTodos = () => {//rename
    getTodos().then((res) => {
      this.setState({
        todos: res,
      });
    });
  };
  

  render() {
    console.log("------------render------------");

    return (
      <div className={style.todo}>
        <section className={style.main}>
          <Header />
          <ListCountainer />
        </section>
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    marker: state.marker,
    visibleTask: state.visibleTask,
  };
};

export default connect(mapStateToProps)(Todo);
