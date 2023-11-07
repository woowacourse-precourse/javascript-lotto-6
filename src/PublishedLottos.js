const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto,js");

class PublishedLottos {
  constructor(money) {
    this.validateMoney(money);
    this.count = money / 1000;
    this.publishedLotto(this.lottoCount);
  }

  validateMoney(money) {
    if (isNaN(money)) throw new Error(ERROR_MESSAGE.NUMBER);

    if (money < 1000) throw new Error(ERROR_MESSAGE.MIN_MONEY);

    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.DIVISION);
  }

  publish() {
    for (let n = 0; n < lottoCount; n++) {
      const newLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      this.list.push(newLotto);
    }
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

    return lottoResultList.filter((result) => result);
  }

  printWinningHisotry() {
    const winningList = [
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
      const winningCount = this.getWinningCount(lottoReultArray, idx);

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
