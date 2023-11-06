import ERROR_MESSAGE from '../constants/erroeMessage.js';

const { validRange } = ERROR_MESSAGE;

export default function validateNumber(number) {
  if (Number.isNaN(number) || number < 1 || number > 45 || number % 1 !== 0) {
    throw new Error(validRange);
  }
}
