import "./DrinkList.css";
import { Component } from "react"

import { Drinks } from "./Drinks.js"

class DrinkList extends Component {
    
    render() {
        
        var ans = []

        var i = 'a'.charCodeAt(0)
        var end = 'z'.charCodeAt(0)

        while (i <= end){
            ans.push(<Drinks letter={String.fromCharCode(i)} />)
            i ++
        } 
        return ans
    }
}

export default DrinkList