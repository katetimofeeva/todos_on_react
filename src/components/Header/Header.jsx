import { Component } from "react";

import MainInputContainer from "../Header/MainInput/MainInputContainer";
import style from "./Header.module.css";

class Header extends Component {
  render() {
 
    return (
      <>
        <h1 className={style.titel}>todos</h1>
        <MainInputContainer {...this.props} />
      </>
    );
  }
}

export default Header;
