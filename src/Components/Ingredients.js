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

    console.log(leftList);
    console.log(rightList);

    if (rightList) {
      return (
        <div>
          <div id="ingredients" className="ingredients border">
            <div id="ingredient" className="ingredient">
              {leftList.map((item) => (
                <div>
                  {item[0]} : {item[1]}
                </div>
              ))}
            </div>
            <div id="ingredient" className="ingredient">
              {rightList.map((item) => (
                <div>
                  {item[0]} : {item[1]}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="ingredients" className="ingredients border">
            <div id="ingredient" className="ingredient">
              {leftList.map((item) => (
                <div>
                  {item[0]} : {item[1]}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}
