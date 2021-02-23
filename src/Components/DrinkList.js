import "./DrinkList.css";
import { Component } from "react";

import { Drinks } from "./Drinks.js";

class DrinkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
    };
  }

  handleNewDrink(e) {
    this.props.onSelectDrink(e);
  }

  render() {
    var ans = [];

    var i = "a".charCodeAt(0);
    var end = "z".charCodeAt(0);

    ans.push(
      <Drinks
        key="Nums"
        letter={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        onSelectDrink={this.props.onSelectDrink}
      />
    );

    while (i <= end) {
      ans.push(
        <Drinks
          key={[String.fromCharCode(i)]}
          letter={[String.fromCharCode(i)]}
          onSelectDrink={this.props.onSelectDrink}
        />
      );
      i++;
    }
    return ans;
  }
}

export default DrinkList;
