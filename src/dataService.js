import axios from "axios";
import token from "./config"

class DataService {
    constructor ( baseURL = "https://api.openweathermap.org/data/2.5/weather", client = axios.create() )
    {
        this.url = baseURL
        this.client = client
    }
    getCurrentWeatherFarenheit(city) {
        return this.client.get(`${this.url}?q=${city}&appid=${token}&units=imperial`)
    }
    getCurrentWeatherCelsius(city) {
        return this.client.get(`${this.url}?q=${city}&appid=${token}&units=metric`)
    }
    getCurrentWeatherUS(city, state) {
        return this.client.get(`${this.url}?q=${city},${state},&appid=${token}&units=imperial`)
    }
}
export default DataService