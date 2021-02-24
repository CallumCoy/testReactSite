import "./DrinkList.css";
import { Component } from "react";

import { Drinks } from "./Drinks.js";

class DrinkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
      show: [],
    };

    this.onSelectLetter = this.onSelectLetter.bind(this);
  }

  onSelectLetter(id) {
    this.setState({ show: id }, () => {
      console.log(this.state.show);
    });
  }

  render() {
    var ans = [];
    const sectionToShow = this.state.show;

    var i = "a".charCodeAt(0);
    const end = "z".charCodeAt(0);

    ans.push(
      <Drinks
        key="Nums"
        letter={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        onSelectDrink={this.props.onSelectDrink}
        onSelectLetter={this.onSelectLetter}
        show={sectionToShow}
      />
    );

    while (i <= end) {
      ans.push(
        <Drinks
          key={[String.fromCharCode(i)]}
          letter={[String.fromCharCode(i)]}
          onSelectDrink={this.props.onSelectDrink}
          onSelectLetter={this.onSelectLetter}
          show={sectionToShow}
        />
      );
      i++;
    }
    return ans;
  }
}

export default DrinkList;
