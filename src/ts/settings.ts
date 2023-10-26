import { settingsDOM, toggleUnitsDOM } from "./vars";
// set var here because imports are read only
export let imperial: boolean = false;

export function toggleSettings() {
  settingsDOM.classList.toggle("hidden");
}

export function toggleUnits() {
  const check = toggleUnitsDOM.checked;

  if (check) imperial = true;
  if (!check) imperial = false;
}
