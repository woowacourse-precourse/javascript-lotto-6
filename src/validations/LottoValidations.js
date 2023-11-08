import { ErrorMessages } from "../constants/ErrorMessages.js";

const validateNumbersLength = (numbers) => {
    if (numbers.length !== 6) {
        throw new Error(ErrorMessages.IS_NOT_SIX_NUMBERS);
    }
}

const validateDuplicationNumbers = (numbers) => {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
        throw new Error(ErrorMessages.IS_NUMBERS_DUPLICATION)
    }
}

const notNumber = (element) => isNaN(element) 
const validateNumbers = (numbers) => {
    if (numbers.some(notNumber)) {
        throw new Error(ErrorMessages.IS_NOT_NUMBER);
    }
}

const notRange = (element) => element < 1 || element > 45
const validateNumbersRange = (numbers) => {
    if (numbers.some(notRange)) {
        throw new Error(ErrorMessages.IS_NOT_NUMBRES_RANGE);
    }
}

export { validateDuplicationNumbers, validateNumbers, validateNumbersLength, validateNumbersRange }; 