import "./Drinks.css";
import { Component } from "react";

export class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { searching, error, isLoaded, items } = this.state;
    const visibleLetter = this.props.show;
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
    } else if (this.props.close) {
      this.setState({
        hidden: true,
      });
    } else if (!isLoaded || visibleLetter != this.letter) {
      if (visibleLetter == this.letter) {
        console.log(!isLoaded);
        console.log(visibleLetter != this.letter);
      }

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
          {items.map((item) => (
            <div>
              <a
                onClick={() => {
                  this.handleNewDrink(item);
                }}
              >
                <h3>
                  {item.strDrink} ({item.strAlcoholic})
                </h3>
              </a>
            </div>
          ))}
        </div>
      );
    }
  }

  toggleShow() {
    const visibleLetter = this.props.show;

    if (visibleLetter == this.letter) {
      this.props.onSelectLetter("");
    } else {
      this.props.onSelectLetter(this.letter);
      if (!this.state.isLoaded && !this.state.searching) {
        this.setState((state) => ({
          searching: true,
        }));
        console.log("fetching: " + this.letter);
        this.GetDrinks();
      }
    }
  }
}

export default Drinks;
