import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

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
    this.validatePurchaseAmount(purchaseAmount);
    this.#lottoQuantity = purchaseAmount / 1000;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!Number.isInteger(Number(purchaseAmount))) {
      throw new Error("[ERROR] 1000원 단위의 정수인 숫자를 입력해 주세요.");
    }
    if (purchaseAmount <= 0 || purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위의 유효한 구매 금액을 입력하세요.");
    }
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
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return Array.from(randomNumbers).sort((a, b) => a - b);
  }
}

export default Lottos;
