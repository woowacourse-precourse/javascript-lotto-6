import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoPurchaseInput from "./LottoPurchaseInput.js";

export default class LottoPurchase {
  static UNIT_MONEY = 1000;

  static async buyWithUserInput() {
    const money = await LottoPurchaseInput.collectMoney();
    return LottoPurchase.#generateLottos(
      LottoPurchase.calculateLottoCount(money)
    );
  }

  static calculateLottoCount(money) {
    return money / LottoPurchase.UNIT_MONEY;
  }

  static #generateLottos(count) {
    return [...Array(count).keys()].map(
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }

  static print(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.map((lotto) => lotto.print());
  }
}
