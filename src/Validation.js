import { errorMessages } from "./Message.js";

export function checkInputTypeIsNumber(input) {
  if (input.match(/\D/g))
    throw new Error(errorMessages.ERROR_INPUT_TYPE_IS_NUMBER);
}

export function checkInputDividedBy1000(input) {
  if (parseInt(input) % 1000 !== 0)
    throw new Error(errorMessages.ERROR_INPUT_DIVIDED_BY_1000);
}

export function checkInputArrayLength1(arr) {
  if (arr.length !== 1)
    throw new Error(errorMessages.ERROR_INPUT_ARRAY_LENGTH_1);
}

export function checkInputArrayLength6(arr) {
  if (arr.length !== 6)
    throw new Error(errorMessages.ERROR_INPUT_ARRAY_LENGTH_6);
}

export function checkInputArrayDuplication(arr) {
  if (new Set(arr).size !== arr.length)
    throw new Error(errorMessages.ERROR_INPUT_ARRAY_DUPLICATIOM);
}

export function checkInputArrayRange(arr) {
  arr.map(Number).forEach((element) => {
    if (element < 1 || element > 45)
      throw new Error(errorMessages.ERROR_INPUT_ARRAY_RANGE);
  });
}
