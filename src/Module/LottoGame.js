import View from "../Utils/View";
import Lotto from "../Lotto";
import { PRIZE_MONEY } from "../Utils/Constants";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoGame {
  constructor() {
    this.boughtAmount = 0;
    this.lottosForUser = [];
    this.winningLotto = null;
    this.numberOfEachRanking = {};
    this.totalProfitRate = 0;
  }

  start() {
    this.receiveMoney();
  }

  receiveMoney() {
    View.inputPurchaseAmount((answer) => {
      this.setBougthAmount(answer);
      this.setLottosForUser(answer / 1000);
      View.outputPurchaseAmount(this.lottosForUser);
      this.receiveWinningLottoNums();
    });
  }

  receiveWinningLottoNums() {
    View.inputLottoNum((answer) => {
      this.setWinningLotto(answer);
      this.receiveBonusNum();
    });
  }

  receiveBonusNum() {
    View.inputBonusNum((answer) => {
      this.setBonusNum(parseInt(answer, 10));
      this.calculaterResult();
      View.outputResult(this.numberOfEachRanking, this.totalProfitRate);
    });
    return;
  }

  setBougthAmount(amount) {
    this.boughtAmount = parseInt(amount, 10);
  }

  setLottosForUser(amount) {
    for (let i = 0; i < amount; i++) {
      this.lottosForUser.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
      );
    }
  }

  setWinningLotto(answer) {
    const [winningNum, bonusNum] = answer.split(",").map(Number);
    this.winningLotto = new Lotto([...winningNum, bonusNum]);
  }

  setBonusNum(number) {
    this.winningLotto.setBonusNum(number);
  }

  calculaterResult() {
    this.calculateEachRanking();
    this.calculateProfitRate();
  }

  calculateEachRanking() {
    this.numberOfEachRanking = this.calculateEachRanking();
  }

  calculateProfitRate() {
    this.totalProfitRate = this.calculateProfitRate();
  }

  calculateRanking() {
    return this.lottosForUser.map((lotto) => {
      this.winningLotto.calculateLottoRanking(lotto.getNumbers());
    });
  }

  calculateProfit() {
    let profit = 0;
    const rankingKeys = Object.keys(PRIZE_MONEY) || {};
    rankingKeys.forEach((rankingKey) => {
      profit += this.numberOfEachRanking[rankingKey] * PRIZE_MONEY[rankingKey];
    });
    return ((profit / this.boughtAmount) * 100).toFixed(2);
  }
}

module.exports = LottoGame;
