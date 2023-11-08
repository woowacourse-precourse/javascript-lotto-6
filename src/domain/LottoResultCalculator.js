import Lotto from "../Lotto.js";
import { PROFIT_FOR_PRIZE } from "../constants/lottoPrize.js";
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
    const LOTTO_PRICE = 1000;
    const investment = LOTTO_PRICE * this.#lottos.length;

    const profit = prizes.reduce((acc, prize) => acc + PROFIT_FOR_PRIZE[prize] || 0, 0);
    return Number((profit / investment) * 100).toFixed(1);
  }

  static #validateLottos(value) {
    typeValidator.isArray(value);
    LottoResultCalculator.#validateHasElement(value);
    LottoResultCalculator.#validateHasOnlyLotto(value);
  }

  static #validateHasElement(value) {
    if (!value.length) {
      throw new Error("[ERROR] 배열에 요소가 1개 이상 존재하지 않습니다.");
    }
  }

  static #validateHasOnlyLotto(value) {
    if (!value.every((element) => element instanceof Lotto)) {
      throw new Error("[ERROR] 로또 객체가 아닌 값이 포함되어 있습니다.");
    }
  }
}

export default LottoResultCalculator;
