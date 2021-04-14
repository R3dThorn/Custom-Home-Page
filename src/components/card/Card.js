import React, { Component } from "react";
import DataService from "../../dataService"
import "./Card.css"
import {ReactComponent as SunIcon} from "../../assets/Sun.svg"
import {ReactComponent as CloudIcon} from "../../assets/PartlyCloudy.svg"

class Card extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            city: "loading",
            state: ",",
            country: "US",
            temperatureF: "loading",
            temperatureC: "loading",
            weather: "loading",
            weatherDescription: "loading"
        }
        this.client = new DataService()
    }
    componentDidMount() 
    {
        this.client.getCurrentWeatherFarenheit(this.props.defaultName)
            .then(response => {
                console.log(response)
                this.setState(
                    { 
                        temperatureF: response.data.main.temp.toFixed(1),
                        city: response.data.name,
                        country: response.data.sys.country,
                        weather: response.data.weather[0].main,
                        weatherDescription: response.data.weather[0].description.toUpperCase()
                    }
                )
            })
            //.then()
            .catch(e => console.log(e))
    }

    render() 
    {
        let weatherLogo;
        if (this.state.weather === "Clear"){
            weatherLogo = <SunIcon className="weatherIcon" />
        }
        if (this.state.weather === "Clouds"){
            weatherLogo = <CloudIcon className="weatherIcon" />
        }
        return (
            <div className="Card">
                {weatherLogo}
                <div id="weather">
                    {this.state.weather}
                </div>
                <div id="weather-description">
                    {this.state.weatherDescription}
                </div>
                <div id="temperature-output">
                    {this.state.temperatureF} &#176;F
                </div>
                <div id="city-name">
                    {this.state.city}, {this.state.country}
                </div>
            </div>
        )
    }
}
export default Card