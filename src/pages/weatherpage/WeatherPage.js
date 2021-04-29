import React from "react";
import WeatherService from "../../weatherService"
import Card from "../../components/card/Card"
import Menu from "../../components/menu/Menu"
import "./WeatherPage.css"

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
        const userInput = document.getElementById("city-input")
        this.client.getCurrentWeatherFarenheit(userInput.value)
            .then(response => {
                console.log(response)
                let newCard = new Card()
                newCard.setState({
                    temperatureF: response.data.main.temp,
                    city: response.data.name,
                    country: response.data.sys.country
                })
                this.setState((state)=>{ cards: state.cards.push(newCard) })
            })
            .catch(e => console.log(e))
    }
    // Handle card fullscreen transition and removal
    // Use document.getElementByID('city name').classList.add('CSS animation class name')
    // Then use .classList.remove() with another .classList.add() to play removal animation
    // Then remove the closing CSS animation class with another .classList.remove()
    cardEnterFullScreen(city) {
        const currentCard = ""
        this.setState({ fullscreen: true })
        return alert(city + " clicked")
    }

    cardExitFullScreen(){
        this.setState({ fullscreen : false })
    }

    render() {
        // overlayscrollbars-react installed. Possibly implement this into cards?
        return(
            <div className="Home">
                <Menu />
                {this.state.cards.map(city => <Card key={city} defaultName={city} cardFull={() => this.cardEnterFullScreen(city)} />)}
            </div>
        )
    }
}
export default WeatherPage;