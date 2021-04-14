import React, { Component } from "react";
import "./Menu.css"

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <div className="Menu">
            <label htmlFor="city-input">Search for city: </label>
            <input id="city-input" name="city-input" type="text"></input>
            <button id="search-button" onClick={this.callWeather}>Search</button>
        </div>
        )
    }
}
export default Menu