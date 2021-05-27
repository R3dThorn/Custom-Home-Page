import React from "react";
import WeatherService from "../../weatherService"
import Card from "../../components/card/Card"
import Menu from "../../components/menu/Menu"
import "./WeatherPage.css"
import * as fs from "fs"

class WeatherPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Replace current state with card based defaults for passdown.
            // Possibly inherit from a JSON file?
            cards: [
                "Murfreesboro",
                "London",
                "Rio de Janeiro",
                "Sydney"
            ],
            fullscreen: false
        }
        this.client = new WeatherService()
        this.callWeather = this.callWeather.bind(this)
        this.cardEnterFullScreen = this.cardEnterFullScreen.bind(this)
    }
    // Make this generate a new card and add to current state. Lifecycles?
    callWeather() {
        const userInput = document.getElementById("city-input").value
        const e = "e"
        // this.client.getCurrentWeatherFarenheit(userInput.value)
        //     .then(response => {
                // console.log(response)
                let cardsTemp = this.state.cards
                cardsTemp.push(userInput)
                this.setState({cards : cardsTemp})
                console.log(this.state.cards)
            // })
            // .catch(e => console.log(e))
    }
    // Handle card fullscreen transition and removal
    // Use document.getElementByID('city name').classList.add('CSS animation class name')
    // Then use .classList.remove() with another .classList.add() to play removal animation
    // Then remove the closing CSS animation class with another .classList.remove()
    cardEnterFullScreen(city) {
        const currentCard = ""
        if (this.state.fullscreen === true){
            this.setState({ fullscreen: false })
        }
        else {
            this.setState({ fullscreen: true })
        }
        setTimeout(
            () => {console.log(city + " clicked", this.state.fullscreen)}, 250
        )
    }

    render() {
        // overlayscrollbars-react installed. Possibly implement this into cards?
        return(
            <div className="Home">
                <Menu />
                <div>
                    <label htmlFor="city-input">Search for city: </label>
                    <input id="city-input" name="city-input" type="text"></input>
                    <button id="search-button" onClick={this.callWeather}>Search</button>
                </div>
                {this.state.cards.map(city => <Card key={city} defaultName={city} cardFull={() => this.cardEnterFullScreen(city)} />)}
            </div>
        )
    }
}
export default WeatherPage;