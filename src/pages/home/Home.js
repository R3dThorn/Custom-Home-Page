import React from "react";
import DataService from "../../dataService"
import Card from "../../components/card/Card"
import Menu from "../../components/menu/Menu"
import "./Home.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperatureF: "loading",
            temperatureC: "loading",
            city: "loading",
            country: "US",
            cards: []
        }
        this.client = new DataService()
        this.callWeather = this.callWeather.bind(this)
    }
// Replace current state with card based defaults for passdown.
// Possibly inherit from a JSON file?
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
// Make this generate a new card and add to current state. Lifecycles???^
    render() {
        return(
            <div className="Home">
                <Menu />
                <Card defaultName={"Murfreesboro"} />
                <Card defaultName={"London"} />
                <Card defaultName={"Rio de Janeiro"} />
                <Card defaultName={"Beijing"} />
            </div>
        )
    }
}
export default Home;