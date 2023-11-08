import { Console } from "@woowacourse/mission-utils";
import getRandomLotto from "./utils/getRandomLotto";
import { GAME_MESSAGE } from "./constants/message";

class LottoPurchase {
  #purchasedLottoList = [];

  constructor(lottoCount) {
    this.purchaseLotto(lottoCount);
  }
  purchaseLotto(lottoCount) {
    Console.print(`${lottoCount}${GAME_MESSAGE.printPurchasedLottoCount}`);

    for (let i = 0; i < lottoCount; i++) {
      const purchasedLotto = getRandomLotto();
      const sortedPurchasedLotto = purchasedLotto.sort((a, b) => a - b);
      this.#purchasedLottoList[this.#purchasedLottoList.length] =
        sortedPurchasedLotto;
      Console.print(`[${sortedPurchasedLotto.join(", ")}]`);
    }
  }

  get purchasedLottoList() {
    return this.#purchasedLottoList;
  }
}

export default LottoPurchase;
