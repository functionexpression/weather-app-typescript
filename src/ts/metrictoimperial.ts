export function convertToFahrenheit(value: number) {
  return ((value * 9) / 5 + 32).toFixed(2);
}
export function convertToMPH(value: number) {
  return (value / 1.609).toFixed(2);
}
export function convertMmToInches(value: number) {
  return (value / 25.4).toFixed(2);
}
