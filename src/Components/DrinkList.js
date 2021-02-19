import "./DrinkList.css";
import { Component } from "react"

import { Drinks } from "./Drinks.js"

class DrinkList extends Component {
    
    render() {
        
        var ans = []

        var i = 'a'.charCodeAt(0)
        var end = 'z'.charCodeAt(0)

        ans.push(<Drinks key="Nums" letter={[0,1,2,3,4,5,6,7,8,9]} />)

        while (i <= end){
            ans.push(<Drinks key={[String.fromCharCode(i)]} letter={[String.fromCharCode(i)]} />)
            i ++
        } 
        return ans
    }
}

export default DrinkList