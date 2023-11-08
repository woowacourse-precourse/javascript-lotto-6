import { LOTTO_NUM_RANGE } from '../constants/conditions';
import ERROR_MESSAGE from '../constants/error';

export default class AutoLottoValidator {
  static #isCorrectLotto(lottos) {
    return lottos.every(
      (lotto) =>
        Array.isArray(lotto) && lotto.length === LOTTO_NUM_RANGE.length,
    );
  }

  static #isNotDuplicated(lottos) {
    return lottos.every((lotto) => lotto.length === new Set(lotto).size);
  }

  static validateAutoLotto(lottos) {
    if (!this.#isCorrectLotto(lottos) || !this.#isNotDuplicated(lottos))
      throw new Error(ERROR_MESSAGE.generateIssue);
    return lottos;
  }
}
