import { Console } from "@woowacourse/mission-utils";
import Lotto from "../lotto/Lotto.js";
import LottoUtils from "./LottoUtils.js";

class LottoGame {
  #purchasedLottos;

  constructor() {
    this.#purchasedLottos = [];
  }

  generateLotto(lottoCount) {
    this.#purchasedLottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = LottoUtils.generateRandomNumber();
      this.#purchasedLottos.push(new Lotto(lottoNumbers));
    }

    this.printPurchasedLottos(lottoCount);
  }

  printPurchasedLottos(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
    this.#purchasedLottos.forEach((lotto) => Console.print(lotto.getNumbers()));
  }
}

export default LottoGame;
