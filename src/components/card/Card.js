import React, { Component } from "react";
import WeatherService from "../../weatherService"
import "./Card.css"
import {ReactComponent as SunIcon} from "../../assets/Sun.svg"
import {ReactComponent as CloudIcon} from "../../assets/PartlyCloudy.svg"
import {ReactComponent as LightRainIcon} from "../../assets/LightRain.svg"
import {ReactComponent as HeavyRainIcon} from "../../assets/HeavyRain.svg"

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
            weatherDescription: "loading",
            timestamp: "loading"
        }
        this.client = new WeatherService()
    }
    
    componentDidMount() 
    {
        this.client.getCurrentWeatherFarenheit(this.props.defaultName)
            .then(response => {
                console.log(response)
                this.setState(
                    { 
                        temperatureF: response.data.main.temp.toFixed(1),
                        temperatureC: ((response.data.main.temp-32)*(5/9)).toFixed(1),
                        city: response.data.name,
                        country: response.data.sys.country,
                        weather: response.data.weather[0].main,
                        weatherDescription: response.data.weather[0].description.toUpperCase(),
                        timestamp: new Date(response.data.dt*1000).toString()
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
        else if (this.state.weather === "Clouds"){
            weatherLogo = <CloudIcon className="weatherIcon" />
        }
        else if (this.state.weather === "Rain"){
            this.state.weatherDescription === "LIGHT RAIN" 
                ? weatherLogo = <LightRainIcon className="weatherIcon" /> 
                : weatherLogo = <HeavyRainIcon className="weatherIcon" />
        }
        else {
            weatherLogo = <p className="weatherIcon">?</p>
        }

        return (
            <div id={this.props.defaultName} className="Card" onClick={this.props.cardFull}>
                {weatherLogo}
                <div id="weather">
                    <div id="weather-simple">
                        {this.state.weather}
                    </div>
                    <div id="weather-description">
                        {this.state.weatherDescription}
                    </div>
                </div>
                <div id="temperature-output">
                    {this.state.temperatureF} &#176;F <span id="temp-celsius">
                    / {this.state.temperatureC} &#176;C</span>
                </div>
                <div id="city-name">
                    {this.state.city}, {this.state.country}
                </div>
                <div id="timestamp">
                    Last updated: {this.state.timestamp}
                </div>
            </div>
        )
    }
}
export default Card