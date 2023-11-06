import {
  checkInputTypeIsNumber,
  checkInputDividedBy1000,
} from "./Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Purchase {
  #purchasePrice; //purchasePrice: 구입금액
  #lottos;

  constructor(purchasePrice) {
    //구입금액
    this.#validatePurchasePrice(purchasePrice);
    this.#purchasePrice = purchasePrice;
    this.buyLottos(purchasePrice / 1000);
  }

  getLottos() {
    return this.#lottos;
  }

  #validatePurchasePrice(purchasePrice) {
    checkInputTypeIsNumber(purchasePrice);
    checkInputDividedBy1000(purchasePrice);
  }

  buyLottos(numberOfLotto) {
    const tmpLottos = [];
    MissionUtils.Console.print(`\n${numberOfLotto}개를 구매했습니다.`);
    for (let i = 0; i < numberOfLotto; i++) {
      const randoms = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randoms);
      tmpLottos.push(lotto);
      lotto.print();
    }
    MissionUtils.Console.print("\n");
    this.#lottos = tmpLottos;
  }
}

export default Purchase;
