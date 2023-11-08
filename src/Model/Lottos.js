import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { NUMBER } from "../util/Constants.js";

class Lottos {
  #lottoTickets;

  #lottoQuantity;

  constructor() {
    this.#lottoTickets = [];
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  getLottoQuantity() {
    return this.#lottoQuantity;
  }

  calculateLottoQuantity(purchaseAmount) {
    this.#lottoQuantity = purchaseAmount / 1000;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!Number.isInteger(Number(purchaseAmount))) {
      return false;
    }
    if (purchaseAmount <= 0 || purchaseAmount % 1000 !== 0) {
      return false;
    }
    return true;
  }

  createLottos(amount) {
    this.calculateLottoQuantity(amount);
    for (let i = 0; i < this.#lottoQuantity; i += 1) {
      const lottoNumbers = this.createLotto();
      const lotto = new Lotto(lottoNumbers);
      this.#lottoTickets.push(lotto);
    }
  }

  createLotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(NUMBER.LOTTO_MIN, NUMBER.LOTTO_MAX, NUMBER.LOTTO_LENGTH);
    return Array.from(randomNumbers).sort((a, b) => a - b);
  }
}

export default Lottos;
