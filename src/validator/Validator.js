import { LOTTO } from '../constants/lottoGame.js';

const isPositiveInteger = (input) => input > 0 && Number.isInteger(input);

const Validator = {
  unit(input) {
    if (input % LOTTO.PRICE) {
      throw new Error('[ERROR] 1,000원 단위의 금액이어야 합니다.');
    }
  },

  numberType(input) {
    if (!isPositiveInteger(input)) {
      throw new Error('[ERROR] 0보다 큰 정수 형태여야 합니다.');
    }
  },
};

export default Validator;
