import ERROR_MESSAGE from '../constants/erroeMessage.js';

const { duplicateError, validRange, numbersLengthError } = ERROR_MESSAGE;

export function validateLength(numbers) {
  if (numbers.length < 6 || numbers.length > 6) {
    throw new Error(numbersLengthError);
  }
}

export function validateDuplicate(numbers) {
  const uniqueNumbers = [...new Set(numbers)]; // 중복 제거
  if (uniqueNumbers.length !== numbers.length) {
    throw new Error(duplicateError);
  }
}

export function validateNumber(number) {
  if (isNaN(number) || number < 1 || number > 45) {
    throw new Error(validRange);
  }
}
