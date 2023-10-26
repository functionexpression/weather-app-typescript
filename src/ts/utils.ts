import { errMsg, errMsgText } from "./vars";

export function displayErrorMessage(err: any, message: string): void {
  console.error(err);
  errMsg.classList.remove("hidden");
  errMsgText.textContent = `${message} ${err.message}`;
}

export function hideErrorMessage(): void {
  errMsg.classList.add("hidden");
}
