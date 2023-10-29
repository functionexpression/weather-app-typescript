import { getCity } from "./utils/city/getCityData";
import { settingsIconDOM, toggleUnitsDOM } from "./utils/vars";
import { toggleSettings, toggleUnits } from "./utils/settings";

document.addEventListener("submit", getCity);
settingsIconDOM.addEventListener("click", toggleSettings);
toggleUnitsDOM.addEventListener("change", toggleUnits);
