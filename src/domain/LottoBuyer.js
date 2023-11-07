import Lotto from "../Lotto.js";
import { PROFIT_FOR_PRIZE } from "../constants/lotto.js";

class LottoBuyer {
  #myLottos;

  constructor(lottos) {
    LottoBuyer.#validateLottos(lottos);
    this.#myLottos = lottos;
  }

  getMyGrades(lottoAnswer) {
    return this.#myLottos
      .map((lotto) => {
        return lottoAnswer.grade(lotto);
      })
      .filter((element) => element !== undefined);
  }

  checkProfitRate(prizes) {
    const LOTTO_PRICE = 1000;
    const investment = LOTTO_PRICE * this.#myLottos.length;

    if (!investment) {
      return 0;
    }

    const profit = prizes.reduce((acc, prize) => acc + PROFIT_FOR_PRIZE[prize] || 0, 0);
    return Number((profit / investment) * 100).toFixed(1);
  }

  static #validateLottos(value) {
    if (!Array.isArray(value)) {
      throw new Error("[ERROR] 배열 형태의 값이 아닙니다.");
    }

    if (!value.every((element) => element instanceof Lotto)) {
      throw new Error("[ERROR] 로또 객체가 아닌 값이 포함되어 있습니다.");
    }
  }
}

export default LottoBuyer;
