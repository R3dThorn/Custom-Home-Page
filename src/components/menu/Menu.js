import React, { Component } from "react";
import "./Menu.css"
import { Link } from "react-router-dom"
class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <div className="Menu">
            <div id="menu-links">
                <Link to="/">Home</Link>
                <Link to="/weather">Weather</Link>
            </div>
            <label htmlFor="city-input">Search for city: </label>
            <input id="city-input" name="city-input" type="text"></input>
            <button id="search-button" onClick={this.callWeather}>Search</button>
        </div>
        )
    }
}
export default Menu