import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/message";
import formatAmount from "./utils/formatAmount";

class Game {
  #purchasedLottoList;
  #winnerLotto;
  #bonusNum;
  #purchaseAmount;
  #sameNumCountList = [];
  #winningLottoCount = {
    three: 0,
    four: 0,
    five: 0,
    fiveNBonus: 0,
    six: 0,
  };

  constructor(purchasedLottoList, winnerLotto, bonusNum, purchaseAmount) {
    this.#purchasedLottoList = purchasedLottoList;
    this.#winnerLotto = winnerLotto;
    this.#bonusNum = bonusNum;
    this.#purchaseAmount = purchaseAmount;
    this.game();
  }

  game() {
    this.#purchasedLottoList.forEach((purchasedLotto) => {
      this.#sameNumCountList[this.#sameNumCountList.length] =
        this.compareLotto(purchasedLotto);
    });

    this.gameResult();
  }
}

export default Game;
