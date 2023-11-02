import ERRORS from '../constants/Errors.js';

const errorMessage = (message, input) => `${message} : ${input}`;

export class ValanceTypeError extends Error {
  constructor(input) {
    super(errorMessage(ERRORS.valanceType, input));
  }
}
