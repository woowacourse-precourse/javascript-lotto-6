import Lotto from "../Lotto.js";

class LottoBuyer {
  #myLottos;

  constructor(lottos) {
    LottoBuyer.#validateLottos(lottos);
    this.#myLottos = lottos;
  }

  checkMyLottos(lottoAnswer) {
    return this.#myLottos
      .map((lotto) => {
        return lottoAnswer.grade(lotto);
      })
      .filter((element) => element !== undefined);
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
