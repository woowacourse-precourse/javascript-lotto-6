import ERROR from '../Constant/Error.js';
import CustomError from './CustomError.js';

const validateInput = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new CustomError(ERROR.INPUT);
  }
};

const validateMinNumber = (input) => {
  if (Number(input) <= 0) {
    throw new CustomError(ERROR.MIN);
  }
};

const validateNumberLength = (input) => {
  if (input.length !== 6) {
    throw new CustomError(ERROR.NUMBER_LENGTH);
  }
};

const validateMaxNumber = (input) => {
  if (Number(input) > 45) {
    throw new CustomError(ERROR.MAX);
  }
};

const checkValidateNumbers = (el) => {
  validateInput(el);
  validateMinNumber(el);
  validateMaxNumber(el);
};

export {
  validateInput,
  validateNumberLength,
  validateMinNumber,
  validateMaxNumber,
  checkValidateNumbers,
};
