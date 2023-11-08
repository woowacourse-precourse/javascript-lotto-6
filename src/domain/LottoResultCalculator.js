import Lotto from "../Lotto.js";
import { LOTTO_PRICE, PROFIT_FOR_PRIZE } from "../constants/lotto.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import SCALE from "../constants/scale.js";
import { typeValidator } from "../utils/validators.js";

class LottoResultCalculator {
  #lottos;

  constructor(lottos) {
    LottoResultCalculator.#validateLottos(lottos);
    this.#lottos = lottos;
  }

  calculatePrizes(lottoAnswer) {
    return this.#lottos
      .map((lotto) => {
        return lottoAnswer.grade(lotto);
      })
      .filter((element) => element !== undefined);
  }

  calculateProfitRate(prizes) {
    const investment = LOTTO_PRICE * this.#lottos.length;
    const profit = prizes.reduce((acc, prize) => acc + PROFIT_FOR_PRIZE[prize] || 0, 0);
    const profitRate = Number((profit / investment) * SCALE.percentage);

    return profitRate.toFixed(SCALE.firstDecimalPlace);
  }

  static #validateLottos(value) {
    typeValidator.isArray(value);
    LottoResultCalculator.#validateHasElement(value);
    LottoResultCalculator.#validateHasOnlyLotto(value);
  }

  static #validateHasElement(value) {
    if (!value.length) {
      throw new Error(ERROR_MESSAGE.hasNoElement);
    }
  }

  static #validateHasOnlyLotto(value) {
    if (!value.every((element) => element instanceof Lotto)) {
      throw new Error(ERROR_MESSAGE.hasNonLotto);
    }
  }
}

export default LottoResultCalculator;
