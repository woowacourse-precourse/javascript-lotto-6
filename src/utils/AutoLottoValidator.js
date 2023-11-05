import { LOTTO_NUM_RANGE } from '../constants/conditions.js';
import ERROR_MESSAGE from '../constants/error.js';

const AutoLottoValidator = {
  isCorrectLotto(lottos) {
    return lottos.every(
      (lotto) =>
        Array.isArray(lotto) && lotto.length === LOTTO_NUM_RANGE.length,
    );
  },

  isNotDuplicated(lottos) {
    return lottos.every((lotto) => lotto.length === new Set(lotto).size);
  },

  validateAutoLotto(lottos) {
    if (!this.isCorrectLotto(lottos) || !this.isNotDuplicated(lottos))
      throw new Error(ERROR_MESSAGE.generateIssue);
    return lottos;
  },
};

export default AutoLottoValidator;
