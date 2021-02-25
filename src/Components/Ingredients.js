import "./Ingredients.css";
import React, { Component } from "react";

export class Ingredients extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ingredients = this.props.ingredients;

    if (!ingredients) {
      return <div> No Ingredients </div>;
    }

    const half = Math.ceil(ingredients.length / 2);

    const leftList = ingredients.splice(-half);
    const rightList = ingredients.splice(0, half);

    if (rightList) {
      return (
        <div>
          <h3>Ingredients</h3>
          <div id="ingredients" className="ingredients">
            {leftList.map((item) => (
              <div id="ingredient" className="ingredient">
                {item[0]} : {item[1]}
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Ingredients</h3>
          <div id="ingredients" className="ingredients">
            {leftList.map((item) => (
              <div id="ingredient" className="ingredient">
                {item[0]} : {item[1]}
              </div>
            ))}
          </div>
          <div>
            {leftList.map((item) => (
              <div id="ingredient" className="ingredient">
                {item[0]} : {item[1]}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
