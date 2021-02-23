import "./Drinks.css";
import { Component } from "react";

export class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      searching: false,
      error: null,
      isLoaded: false,
      items: [],
    };
    this.curIndex = 0;
    this.letter = props.letter;
    this.cache = new Map();

    this.toggleShow = this.toggleShow.bind(this);
    this.handleNewDrink = this.handleNewDrink.bind(this);
  }

  handleNewDrink(e) {
    console.log("loggin e " + JSON.stringify(e, null, 2));
    this.props.onSelectDrink(e);
  }

  GetDrinks() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
    fetch(url + this.letter[this.curIndex])
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(url + this.letter[this.curIndex]);
          if (result.drinks && !this.cache.has(this.letter[this.curIndex])) {
            this.setState({
              items: this.state.items.concat(
                result.drinks.sort((a, b) =>
                  a.strAlcoholic.localeCompare(b.strAlcoholic)
                )
              ),
            });
            this.cache.set(this.letter[this.curIndex], true);
          }

          if (this.curIndex < this.letter.length - 1) {
            this.curIndex++;
            this.GetDrinks();
          }

          this.setState({
            isLoaded: true,
          });
          console.log(this.state);
        },
        (error) => {
          if (this.curIndex < this.letter.length - 1) {
            this.curIndex++;
            console.log(error);
            this.GetDrinks();
          }
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { hidden, searching, error, isLoaded, items } = this.state;
    const header = /[a-z]/.test(this.letter[0])
      ? this.letter[0].toUpperCase()
      : "0 - 9";

    if (error) {
      return (
        <div>
          <a onClick={this.toggleShow}>
            <h2>
              <b> {header} </b>
            </h2>
          </a>
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded || hidden) {
      return (
        <a onClick={this.toggleShow}>
          <h2>
            <b> {header} </b>
          </h2>
        </a>
      );
    } else if (items == [] || items[0] == null) {
      return (
        <div>
          <a onClick={this.toggleShow}>
            <h2>
              <b> {header} </b>
            </h2>
          </a>
          <h4> None </h4>
        </div>
      );
    } else {
      return (
        <div>
          <a onClick={this.toggleShow}>
            <h2>
              <b> {header} </b>
            </h2>
          </a>
          <ul>
            {items.map((item) => (
              <li key={item.idDrink}>
                <a
                  onClick={() => {
                    this.handleNewDrink(item);
                  }}
                >
                  <h4>
                    {item.strDrink} {item.strAlcoholic}
                  </h4>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  toggleShow() {
    this.setState((state) => ({
      hidden: !state.hidden,
    }));

    if (this.state.hidden && !this.state.isLoaded && !this.state.searching) {
      this.setState((state) => ({
        searching: true,
      }));
      console.log("fetching: " + this.letter);
      this.GetDrinks();
    }
  }
}

export default Drinks;
