import React from "react";
import DataService from "../../dataService"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            temperatureF: "loading",
            temperatureC: "loading",
            city: "loading",
            country: "US"
        }
        this.client = new DataService()
        this.callWeather = this.callWeather.bind(this)
    }
    componentDidMount() {
        this.client.getWeatherFarenheit("Murfreesboro")
            .then(response => {
                console.log(response)
                this.setState(
                    { 
                        temperatureF: response.data.main.temp,
                        city: response.data.name,
                        country: response.data.sys.country
                    }
                )
            })
            //.then()
            .catch(e => console.log(e))
    }
    callWeather() {
        const userInput = document.getElementById("city-input")
        this.client.getWeatherFarenheit(userInput.value)
            .then(response => {
                console.log(response)
                this.setState(
                    {
                        temperatureF: response.data.main.temp,
                        city: response.data.name,
                        country: response.data.sys.country
                    }
                )
            })
            .catch(e => console.log(e))
    }

    render() {
        return(
            <div className="Home">
                <label htmlFor="city-input">Search for city:</label>
                <input id="city-input" name="city-input" type="text"></input>
                <button id="search-button" onClick={this.callWeather}>Search</button>
                <div id="temperature-output">
                    {this.state.temperatureF}
                </div>
                <div id="city-name">
                    {this.state.city}, {this.state.country}
                </div>
            </div>
        )
    }
}
export default Home;