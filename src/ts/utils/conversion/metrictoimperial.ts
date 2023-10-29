export function convertToFahrenheit(value: number): number {
  //prettier-ignore
  return Number(((value * 9 / 5) + 32).toFixed(2));
}
export function convertToMPH(value: number): number {
  return Number((value / 1.609).toFixed(2));
}
export function convertMmToInches(value: number): number {
  return Number((value / 25.4).toFixed(2));
}
