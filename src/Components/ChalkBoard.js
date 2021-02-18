import "./ChalkBoard.css"
import React, { Component } from 'react';

import DrinkList from './DrinkList.js'

class ChalkBoard extends Component {
    render() {
        return(
            <div className="Menu">
              <div className="List">
                <h1> Drinks </h1>
                <DrinkList/>
              </div>
            </div>
        );
    }
}

export default ChalkBoard