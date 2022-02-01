import { Component } from "react";

import MainInput from "../Header/MainInput/MainInput";
import style from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <>
        <h1 className={style.titel}>todos</h1>
        <MainInput {...this.props} />
      </>
    );
  }
}

export default Header;
