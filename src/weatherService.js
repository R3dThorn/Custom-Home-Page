import axios from "axios";
import tokens from "./config"

class WeatherService {
    constructor ( baseURL = "https://api.openweathermap.org/data/2.5/weather", client = axios.create() )
    {
        this.url = baseURL
        this.client = client
    }
    getCurrentWeatherFarenheit(city) {
        return this.client.get(`${this.url}?q=${city}&appid=${tokens.weather}&units=imperial`)
    }
    getCurrentWeatherCelsius(city) {
        return this.client.get(`${this.url}?q=${city}&appid=${tokens.weather}&units=metric`)
    }
    getCurrentWeatherUS(city, state) {
        return this.client.get(`${this.url}?q=${city},${state},&appid=${tokens.weather}&units=imperial`)
    }
}
export default WeatherService