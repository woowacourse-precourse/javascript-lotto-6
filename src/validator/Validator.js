import { LOTTO } from '../constants/lottoGame.js';
import { ERROR_MESSAGE } from '../constants/message.js';

const inRange = (input) =>
  input >= LOTTO.MIN_NUMBER && input <= LOTTO.MAX_NUMBER;

const Validator = {
  unit(input) {
    if (input % LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGE.UNIT);
    }
  },

  availability(input) {
    if (input < LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGE.AVAILABILITY);
    }
  },

  numberType(input) {
    if (!Number.isInteger(input)) {
      throw new Error(ERROR_MESSAGE.NUMBER_TYPE);
    }
  },

  length(input) {
    if (input.length !== LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
  },

  range(input) {
    if (!input.every(inRange)) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
  },

  duplication(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATION);
    }
  },
};

export default Validator;
