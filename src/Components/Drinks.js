import "./DrinkList.css";
import { Component } from "react"

export class Drinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.letter = props.letter
    }
    
    GetDrinks() {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
        console.log("Messaging " + url + this.letter)
        fetch(url + this.letter)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks.sort((a, b) => a.strAlcoholic.localeCompare(b.strAlcoholic))
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (!isLoaded && this.letter === 'a'){
            console.log('making a call')
            this.GetDrinks()
        }

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <h2><b> {this.letter.toUpperCase()} </b></h2>
        } else {

            return(
                <div>
                    <h2><b> {this.letter.toUpperCase()} </b></h2>
                    <ul>
                        {items.map(item => (
                            <li key={item.idDrink}>
                                <h4>{item.strDrink} {item.strAlcoholic}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Drinks