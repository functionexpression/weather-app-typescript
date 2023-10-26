import { getCity } from "./getCityData";
import { settingsIconDOM, toggleUnitsDOM } from "./vars";
import { toggleSettings, toggleUnits } from "./settings";

document.addEventListener("submit", getCity);
settingsIconDOM.addEventListener("click", toggleSettings);
toggleUnitsDOM.addEventListener("change", toggleUnits);
