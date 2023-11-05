import { errorMessages } from "./Message.js";

export function checkInputTypeIsNumber(input) {
  if (input.match(/\D/g))
    throw new Error(errorMessages.ERROR_INPUT_TYPE_IS_NUMBER);
}

export function checkInputDividedBy1000(input) {
  if (parseInt(input) % 1000 !== 0)
    throw new Error(errorMessages.ERROR_INPUT_DIVIDED_BY_1000);
}
