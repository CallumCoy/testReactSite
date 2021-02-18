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
    
    GetDrinks(targ) {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/";
        fetch(url + targ)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
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

        return (<h2> {this.letter} </h2>)
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <ul>
                    {items.map(item => (
                        <li key={item}></li>
                    ))}
                </ul>
            )
        }
    }
}

export default Drinks