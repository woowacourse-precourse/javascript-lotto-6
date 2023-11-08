import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Validation from "./libs/Validation.js";

class PublishedLottos {
  constructor(money) {
    this.validate(money);
    this.count = money / 1000;
    this.list = [];
    this.publish();
  }

  validate(money) {
    Validation.checkMoney(money);
  }

  publish() {
    for (let n = 0; n < this.count; n++) {
      const newLotto = this.createNewLotto();
      this.list.push(newLotto);
    }
  }

  createNewLotto() {
    const newNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(newNumbers);
  }

  printCount() {
    Console.print(`\n${this.count}개를 구매했습니다.`);
  }

  printList() {
    this.list.forEach((lotto) => lotto.printNumbers());
  }

  getResult(winningNumbers, bonusNumber) {
    let lottoResultList = [];

    this.list.forEach((lotto) => {
      lottoResultList.push(lotto.getResult(winningNumbers, bonusNumber));
    });

    return lottoResultList.filter((result) => result <= 5);
  }

  printWinningHistory() {
    const winningHistoryList = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ];
    winningHistoryList.forEach((winningHistory, idx) => {
      const winningCount = this.getWinningCount(lottoResultArray, idx);
      Console.print(`${winningHistory} - ${winningCount}개`);
    });
  }

  printRate(lottoResultArray) {
    const lottePrize = [5000, 50000, 1500000, 30000000, 2000000000];
    const finalPrize = lottePrize.reduce((acc, cur, idx) => {
      const winningCount = this.getWinningCount(lottoResultArray, idx);

      return acc + cur * winningCount;
    }, 0);

    const purchaseMoney = this.count * 1000;
    const lottoRate = ((finalPrize / purchaseMoney) * 100).toFixed(1);

    Console.print(`총 수익률은 ${lottoRate}%입니다.`);
  }

  getWinningCount(lottoReultArray, idx) {
    return lottoReultArray.filter((result) => result === 5 - idx).length;
  }
}

module.exports = PublishedLottos;
