import LOTTO from './constants/lotto.js';

class LottoMachine {
  #numberOfLottos;

  constructor(money) {
    this.#validateMoney(money);
    this.#numberOfLottos = money / LOTTO.price;
  }

  #validateMoney(money) {
    if (money % LOTTO.price) {
      throw new Error(`[ERROR] 구입 금액은 ${LOTTO.price}원 단위여야 합니다.`);
    }
  }
}

export default LottoMachine;
