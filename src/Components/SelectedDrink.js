import "./SelectedDrink.css";
import React, { Component } from "react";

import { Ingredients } from "./Ingredients.js";

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
              {selectedDrink.name} ({selectedDrink.alcoholic})
            </b>
          </h3>
          <br></br>
          <img
            id="drinkImage"
            className="drinkImage"
            src={selectedDrink.image}
          ></img>
          <br></br>
          <b>Catagory:</b> {selectedDrink.cat}
          <br></br>
          <b>Glass Type:</b> {selectedDrink.glassType}
          <br></br>
          <h3>Instructions</h3>
          <div id="instr" className="instr">
            {selectedDrink.instr}
          </div>
          <h3>Ingredients</h3>
          <Ingredients ingredients={selectedDrink.ingredients} />
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
