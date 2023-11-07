import { InputErrorMessages } from "../constants/UserInputMessages.js";

export const validateNumbers = (number) => {
    if (isNaN(number)) {
        throw new Error(InputErrorMessages.IS_NOT_NUMBER);
    }

}

export const validateDivide = (number) => {
    if (number % 1000 !== 0) {
        throw new Error(InputErrorMessages.IS_NOT_DIVIDE)
    }
}

export const validateBounusNumber = (number) => {
    if (number < 1 || number > 45) {
        throw new Error(InputErrorMessages.IS_NOT_NUMBERS_RANGE)
    }
}