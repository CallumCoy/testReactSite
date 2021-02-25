import "./App.css";
import ChalkBoard from "./Components/ChalkBoard.js";
import SelectedDrink from "./Components/SelectedDrink.js";
import React, { Component } from "react";

function App() {
  return <Site />;
}

class Site extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      hideDrink: true,
      processingDrink: false,
      error: null,
      drinkLoaded: false,
      item: null,
    };

    this.setDrink({});
    this.setDrink = this.setDrink.bind(this);
  }

  render() {
    const drink = this.state.item;

    return (
      <div className="App">
        <ChalkBoard onSelectDrink={this.setDrink} />
        <SelectedDrink drink={drink} />
      </div>
    );
  }

  setDrink(drinkIn) {
    const drink = {
      id: drinkIn.id ? drinkIn.id : 0,
      name: drinkIn.strDrink ? drinkIn.strDrink : "None",
      cat: drinkIn.strCategory ? drinkIn.strCategory : "None",
      alcoholic: drinkIn.strAlcoholic ? drinkIn.strAlcoholic : "None",
      glassType: drinkIn.strGlass ? drinkIn.strGlass : "None",
      instr: drinkIn.strInstructions ? drinkIn.strInstructions : "None",
      image: drinkIn.strDrinkThumb ? drinkIn.strDrinkThumb : "None",

      ingredients: this.processIngredients(drinkIn),
    };

    this.setState({ item: drink }, () => {
      console.log("logged drink " + JSON.stringify(drink, null, 2));
      console.log("saved Drink " + JSON.stringify(this.state.item, null, 2));
    });
  }

  //For some reason the database is not an array for this
  processIngredients(drink) {
    var ingredients = [
      [drink.strIngredient1, drink.strMeasure1],
      [drink.strIngredient2, drink.strMeasure2],
      [drink.strIngredient3, drink.strMeasure3],
      [drink.strIngredient4, drink.strMeasure4],
      [drink.strIngredient5, drink.strMeasure5],
      [drink.strIngredient6, drink.strMeasure6],
      [drink.strIngredient7, drink.strMeasure7],
      [drink.strIngredient8, drink.strMeasure8],
      [drink.strIngredient9, drink.strMeasure9],
      [drink.strIngredient10, drink.strMeasure10],
      [drink.strIngredient11, drink.strMeasure11],
      [drink.strIngredient12, drink.strMeasure12],
      [drink.strIngredient13, drink.strMeasure13],
      [drink.strIngredient14, drink.strMeasure14],
      [drink.strIngredient15, drink.strMeasure15],
    ];
    return ingredients.filter(
      (element) => element[0] != null && element[0] != ""
    );
  }
}

export default App;
