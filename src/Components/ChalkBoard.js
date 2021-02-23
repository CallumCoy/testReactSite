import "./ChalkBoard.css";
import React, { Component } from "react";

import DrinkList from "./DrinkList.js";

class ChalkBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
    };
  }

  render() {
    return (
      <div className="Menu">
        <div className="List">
          <h1> Drinks </h1>
          <DrinkList onSelectDrink={this.props.onSelectDrink} />
        </div>
      </div>
    );
  }
}

export default ChalkBoard;
