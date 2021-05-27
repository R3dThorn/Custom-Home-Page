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
        </div>
        )
    }
}
export default Menu