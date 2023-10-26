import { svg } from "./vars";
import { displayErrorMessage } from "./utils";

// weather codes can be found at https://open-meteo.com/en/docs
export function handleWeatherCode(
  weatherCode: number,
  updateFunc: () => void
): void {
  switch (weatherCode) {
    case 0:
      // Clear sky
      svg.src = "/sunny.svg";
      svg.alt = "Sunny";
      updateFunc();
      break;
    case 1:
    case 2:
      // Mainly clear, Partly cloudy,
      svg.src = "/partly-cloudy-day.svg";
      svg.alt = "Partially Cloudy";
      updateFunc();
      break;
    case 3:
      // Overcast
      svg.src = "/overcast.svg";
      svg.alt = "Overcast";
      updateFunc();
      break;
    case 45:
    case 48:
      // Fog and depositing rime fog
      svg.src = "/fog.svg";
      svg.alt = "Foggy";
      updateFunc();
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      // Drizzle: Light, moderate, and dense intensity + Freezing Drizzle: Light and dense intensity
      svg.src = "/drizzle.svg";
      svg.alt = "Drizzle";
      updateFunc();
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      // Rain: Slight, moderate and heavy intensity + Freezing Rain: Light and heavy intensity
      svg.src = "/rain.svg";
      svg.alt = "Rain";
      updateFunc();
      break;
    case 71:
    case 73:
    case 75:
      // Snow fall: Slight, moderate, and heavy intensity
      svg.src = "/snow.svg";
      svg.alt = "Snowfall";
      updateFunc();

      break;
    case 77:
      // Snow grains
      svg.src = "/snowflake.svg";
      svg.alt = "Snow Grains";
      updateFunc();
      break;
    case 80:
    case 81:
    case 82:
      // Rain showers: Slight, moderate, and violent
      svg.src = "/raindrop.svg";
      svg.alt = "Rain Showers";
      updateFunc();

      break;
    case 85:
    case 86:
      // Snow showers slight and heavy
      svg.src = "/snow.svg";
      svg.alt = "Snow Showers";
      updateFunc();
      break;
    case 95:
      // Thunderstorm: Slight or moderate
      svg.src = "/thunderstorms.svg";
      svg.alt = "Thunderstorm";
      updateFunc();
      break;
    case 96:
    case 99:
      // Thunderstorm with slight and heavy hail
      svg.src = "/thunderstorms-snow.svg";
      svg.alt = "Thunderstorm with Hail";
      updateFunc();
      break;
    default:
      displayErrorMessage(
        "Invalid weather code.",
        "No weathercode found. Try another city or retry submitting."
      );
  }
}
