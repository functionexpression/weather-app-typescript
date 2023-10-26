import { getWeatherData } from "./getWeatherData";
import { displayErrorMessage, hideErrorMessage } from "./utils";
let lon: string;
let lat: string;
let API_URL: string;
export let city: string;
export let country: string;

export async function getCity(e: Event): Promise<void> {
  try {
    hideErrorMessage();
    e.preventDefault();
    const form = document.querySelector(".form") as HTMLFormElement;
    const formData = new FormData(form);
    const formValues = [...formData.values()];

    //get required data from form data
    const req = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${formValues[0]}&count=10&language=en&format=json`
    );

    if (!req.ok) {
      throw new Error(
        `Error fetching data from API. (${req.status} ${req.statusText})`
      );
    }

    const data = await req.json();

    // get and set city information
    const cityObj = data.results[0];

    lon = cityObj.longitude;
    lat = cityObj.latitude;
    city = cityObj.name;
    country = cityObj.country;

    //set api url
    API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,cloudcover,surface_pressure,windspeed_10m`;

    // get weather data
    getWeatherData(API_URL);
  } catch (err: any) {
    displayErrorMessage(
      err,
      "Failed to fetch city data. Retry submitting a city."
    );
  }
}
