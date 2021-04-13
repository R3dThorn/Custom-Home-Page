import axios from "axios";
import token from "./config"

class DataService {
    constructor ( baseURL = "https://api.openweathermap.org/data/2.5/weather", client = axios.create() )
    {
        this.url = baseURL
        this.client = client
    }
    getWeatherFarenheit(city) {
        return this.client.get(this.url + `?q=${city}&appid=` + token + "&units=imperial")
    }
}
export default DataService