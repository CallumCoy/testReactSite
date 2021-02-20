import "./SelectedDrink.css";
import React, { Component } from "react";

class SelectedDrink extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      hidden: true,
      searching: false,
      error: null,
      isLoaded: false,
      items: [],
    };

    this.setDrink(prop);
  }

  setDrink(prop) {
    this.id = prop.id;
    this.name = prop.strDrink;
    this.cat = prop.strCategory;
    this.alcoholic = prop.strAlcoholic;
    this.glassType = prop.strGlass;
    this.instr = prop.strInstructions;
    this.image = prop.strDrinkThumb;

    this.processIngredients(prop);
  }

  render() {
    return (
      <div id="drinkInfo" className="drinkInfo">
        {" "}
        HI{" "}
      </div>
    );
  }

  //For some reason the database is not an array for this
  processIngredients(prop) {
    this.ingredients = [
      [prop.strIngredient1, prop.strMeasure1],
      [prop.strIngredient2, prop.strMeasure2],
      [prop.strIngredient3, prop.strMeasure3],
      [prop.strIngredient4, prop.strMeasure4],
      [prop.strIngredient5, prop.strMeasure5],
      [prop.strIngredient6, prop.strMeasure6],
      [prop.strIngredient7, prop.strMeasure7],
      [prop.strIngredient8, prop.strMeasure8],
      [prop.strIngredient9, prop.strMeasure9],
      [prop.strIngredient10, prop.strMeasure10],
      [prop.strIngredient11, prop.strMeasure11],
      [prop.strIngredient12, prop.strMeasure12],
      [prop.strIngredient13, prop.strMeasure13],
      [prop.strIngredient14, prop.strMeasure14],
      [prop.strIngredient15, prop.strMeasure15],
    ];

    this.ingredients = this.ingredients.filter((element) => element[0] != null);
  }
}

export default SelectedDrink;
