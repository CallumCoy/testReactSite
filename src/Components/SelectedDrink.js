import "./SelectedDrink.css";
import React, { Component } from "react";

export class SelectedDrink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedDrink = this.props.drink;

    if (selectedDrink) {
      return (
        <div id="drinkInfo" className="drinkInfo">
          <h3>
            <b>
              {selectedDrink.name} {selectedDrink.alcoholic}
            </b>
          </h3>
          <br></br>
          <img
            id="drinkImage"
            className="drinkImage"
            src={selectedDrink.image}
          ></img>
          <br></br>
          Catagory: {selectedDrink.cat}
          <br></br>
          Glass Type: {selectedDrink.glassType}
          <br></br>
          Instructions: {selectedDrink.instr}
        </div>
      );
    } else {
      return (
        <div id="drinkInfo" className="drinkInfo">
          {" "}
        </div>
      );
    }
  }
}

export default SelectedDrink;
