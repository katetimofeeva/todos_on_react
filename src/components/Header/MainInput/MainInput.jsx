import React from "react";
import { Component } from "react";

import MainCheckboxContainer from "../MainCheckbox/MainChecboxContainer";
import style from "./MainInput.module.css";

class MainInput extends Component {
  constructor(props) {
    super(props);
    this.state ={
      value:''
    }

    this.myRef = React.createRef();
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    let value = e.target.value;
    if (e.keyCode === 13 && value.trim().length !== 0) {
      this.props.addTask(e.target.value);
      // e.target.value= ''
       this.setState({
      value: "",
    })
    }
   ;
   
  };

  componentDidMount() {
    this.myRef.current.focus();
  }

  componentDidUpdate(prevProps) {
    if (this.props.todos !== prevProps.todos) {
      this.myRef.current.focus();
    }
  }

  render() {
   
    return (
      <>
        <header className={style.header}>
          <div className={style.input_header}>
          <MainCheckboxContainer/>
            {/* <MainCheckbox {...this.props} /> */}
            <input
              type="text"
              className={style.new_todo}
              name="description"
              value={this.state.value}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              placeholder="Whats need to be done?"
              autoComplete="off"
              autoFocus
              ref={this.myRef}
            />
          </div>
        </header>
      </>
    );
  }
}

export default MainInput;
