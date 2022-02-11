import { Component } from "react";
import { FILTERS } from "./Constants";

import style from "./FilterTasks.module.css";
import cn from "classnames";

class FilterTasks extends Component {
  handleClick = (e) => {
    this.props.setmarker(e.target.innerText.toLocaleLowerCase());
  };

  render() {
    const { marker } = this.props;
    
    return (
      <li>
        {FILTERS.map((btn) => {
          const activeClass =
            marker === btn.toLowerCase()
              ? cn(style.btn, style.active)
              : style.btn;
              
          return (
            <button
              key={btn}
              onClick={this.handleClick}
              className={activeClass}
            >
              {btn}
            </button>
          );
        })}
      </li>
    );
  }
}

export default FilterTasks;
