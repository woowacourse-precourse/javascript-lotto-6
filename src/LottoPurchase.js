import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export default class LottoPurchase {
  static UNIT_MONEY = 1000;

  #count;

  constructor(money) {
    LottoPurchase.validate(money);
    this.#count = LottoPurchase.#calculateLottoCount(money);
  }

  generateLottos() {
    return [...Array(this.#count).keys()].map(
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }

  static #calculateLottoCount(money) {
    return money / LottoPurchase.UNIT_MONEY;
  }

  static print(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.map((lotto) => lotto.print());
  }

  static validate(money) {
    if (!(money % LottoPurchase.UNIT_MONEY === 0))
      throw new Error(
        `[ERROR] 구매금액은 ${LottoPurchase.UNIT_MONEY}원 단위로만 입력 가능합니다.`
      );
  }
}
