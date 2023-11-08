import { LOTTO } from '../constants/lottoGame.js';

const inRange = (input) =>
  input >= LOTTO.MIN_NUMBER && input <= LOTTO.MAX_NUMBER;

const Validator = {
  unit(input) {
    if (input % LOTTO.PRICE) {
      throw new Error('[ERROR] 구매 금액은 1,000원 단위여야 합니다.');
    }
  },

  availability(input) {
    if (input < LOTTO.PRICE) {
      throw new Error('[ERROR] 구매 금액은 1,000원 이상이어야 합니다.');
    }
  },

  numberType(input) {
    if (!Number.isInteger(input)) {
      throw new Error('[ERROR] 구매 금액은 1,000원 단위로 된 숫자여야 합니다.');
    }
  },

  length(input) {
    if (input.length !== LOTTO.LENGTH) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  },

  range(input) {
    if (!input.every(inRange)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  },

  duplication(input) {
    if (new Set(input).size !== input.length) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.');
    }
  },
};

export default Validator;
