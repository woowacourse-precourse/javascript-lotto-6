import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  BEFORE_RESULT,
  FIRST_RANK_MESSAGE,
  SECOND_RANK_MESSAGE,
  THIRD_RANK_MESSAGE,
  FOURTH_RANK_MESSAGE,
  FIFTH_RANK_MESSAGE,
} from "./message.js";
class User {
  #lottos;
  #money;

  constructor(money) {
    this.#lottos = [];
    this.#money = money;
    this.buyLotto();
  }
  buyLotto() {
    this.#lottos = Array.from({ length: this.#money / 1000 }).map(
      () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
    );
    this.printRandomLotto();
  }
  printRandomLotto() {
    this.#lottos.map((lotto) =>
      Console.print(`[${lotto.getLottoNumbers().join(", ")}]`)
    );
    Console.print("");
  }

  getLottos() {
    return this.#lottos;
  }

  makeResult(shop) {
    return this.getLottos().reduce(
      (result, lotto) => {
        const rank = shop.check(lotto);
        if (result[rank] === undefined) return result;
        result[rank] = result[rank] + 1;
        return result;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    );
  }

  showResult(shop) {
    const rank = this.makeResult(shop);

    Console.print(BEFORE_RESULT);
    Console.print(FIFTH_RANK_MESSAGE + `${rank[5]}개`);
    Console.print(FOURTH_RANK_MESSAGE + `${rank[4]}개`);
    Console.print(THIRD_RANK_MESSAGE + `${rank[3]}개`);
    Console.print(SECOND_RANK_MESSAGE + `${rank[2]}개`);
    Console.print(FIRST_RANK_MESSAGE + `${rank[1]}개`);

    this.printRateOfReturn(rank);
  }
  printRateOfReturn(rank) {
    const counts = Object.entries(rank);
    const prices = [2000000000, 30000000, 1500000, 50000, 5000];
    const amountReturn = counts.map(([key, value]) => {
      return value * prices[key - 1];
    });
    const sumOfReturn = amountReturn
      .filter((element) => element >= 0)
      .reduce((x, y) => x + y);
    const rateOfReturn = Math.round((sumOfReturn / this.#money) * 1000) / 10;
    Console.print(`총 수익률은 ${rateOfReturn.toLocaleString()}%입니다.`);
  }
}

export default User;
