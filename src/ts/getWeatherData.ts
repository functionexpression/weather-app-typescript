import { handleWeatherCode } from "./handleWeatherCode";
import {
  convertToFahrenheit,
  convertToMPH,
  convertMmToInches,
} from "./metrictoimperial";
import {
  svg,
  weatherDOM,
  cityDOM,
  degreesDOM,
  windDOM,
  humidityDOM,
  precipitationDOM,
  cloudcoverDOM,
} from "./vars";

import { city, country } from "./getCityData";

export async function getWeatherData(url: string): Promise<void> {
  try {
    const req: Response = await fetch(url);

    if (!req.ok) {
      throw new Error(
        `Error fetching data from API. (${req.status} ${req.statusText})`
      );
    }

    const data = await req.json();

    //get locale
    const locale = navigator.language;

    // set other variables
    const weatherCode: number = data.current.weathercode;
    const degrees: number = data.current.temperature_2m;
    const degreesFormat: string = data.current_units.apparent_temperature;
    const windspeed = data.current.windspeed_10m;
    const windspeedFormat: string = data.current_units.windspeed_10m;
    const humidity: number = data.current.relativehumidity_2m;
    const humidityFormat: string = data.current_units.relativehumidity_2m;
    const precipitation: number = data.current.precipitation;
    const precipitationFormat: string = data.current_units.precipitation;
    const cloudcover: number = data.current.cloudcover;
    const cloudcoverFormat: string = data.current_units.cloudcover;

    //determine what unit to use based off users locale
    const imperial: boolean = locale === "en-US";

    function updateDOM() {
      cityDOM.textContent = `${city}, ${country}`;

      //convert temperature, wind speed and precipitation if the user is from the us
      degreesDOM.textContent = imperial
        ? `${convertToFahrenheit(degrees)} °F`
        : `${degrees} ${degreesFormat}`;

      windDOM.textContent = imperial
        ? `${convertToMPH(windspeed)} mph`
        : `${windspeed} ${windspeedFormat}`;

      humidityDOM.textContent = `${humidity}${humidityFormat}`;

      precipitationDOM.textContent = imperial
        ? `${convertMmToInches(precipitation)} in`
        : `${precipitation} ${precipitationFormat}`;

      cloudcoverDOM.textContent = `${cloudcover}${cloudcoverFormat}`;

      weatherDOM.textContent = svg.alt;
    }

    handleWeatherCode(weatherCode, updateDOM);
  } catch (err: any) {
    console.error(err);
    throw new Error(`Failed to fetch weather data. (${err.message})`);
  }
}
