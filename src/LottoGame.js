const { ERROR_MESSAGE } = require("./Constant.js");
const { Console, Random } = require("@woowacourse/mission-utils");
const { Lotto } = require("./Lotto.js");
const validation = require("./Validation.js");

class LottoGame {
  constructor() {
    this.lottoCount = null;
    this.lottoList = [];
    this.winningNumList = null;
    this.bonusNum = null;
    this.lottoResultList = [];
  }

  setLotteCount(money) {
    this.validateMoney(money);
    this.lottoCount = money / 1000;
    this.publishedLotto(this.lottoCount);
  }

  validateMoney(money) {
    if (isNaN(money)) throw new Error(ERROR_MESSAGE.NUMBER);

    if (money < 1000) throw new Error(ERROR_MESSAGE.MIN_MONEY);

    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.DIVISION);
  }

  printLotteCount() {
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
  }

  publishedLotto(lottoCount) {
    for (let n = 0; n < lottoCount; n++) {
      const newLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      this.lottoList.push(newLotto);
    }
  }

  printLottoList() {
    this.lottoList.forEach((lotto) => {
      lotto.printNumberList();
    });
  }

  setWinningNums(nums) {
    numbers = numbers.split(",").map((item) => Number(item));
    this.validateWinningNums(nums);
    this.winningNumList = numbers;
  }

  validateWinningNums(nums) {
    validation.checkNumberList(nums);
  }

  setBonusNum(num) {
    num = Number(num);
    this.validateBonusNum(num);

    this.bonusNum = num;
  }

  validateBonusNum(num) {
    validation.checkBonusNum(num, this.winningNumList);
  }

  setWinningStats() {
    this.getLottoResult();
    const winningList = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ];
    winningList.forEach((winningStat, idx) => {
      const winningCount = this.getWinningCount(idx);
      Console.print(`${winningStat} - ${winningCount}개`);
    });
  }

  printLottoRate() {
    const lottoPrize = [5000, 50000, 1500000, 30000000, 2000000000];
    const finalPrize = lottoPrize.reduce((acc, cur, idx) => {
      const winningCount = this.getWinningCount(idx);

      return acc + cur * winningCount;
    }, 0);

    const purchaseMoney = this.lottoCount * 1000;

    const lottoRate = ((finalPrize / purchaseMoney) * 100).toFixed(1);
    Console.print(`총 수익률은 ${lottoRate}%입니다.`);
  }

  getWinningCount(idx) {
    return this.lottoResultList.filter((result) => result === 5 - idx).length;
  }

  getLottoResult() {
    let lottoResultList = [];

    this.lottoList.forEach((lotto) => {
      lottoResultList.push(lotto.getResult(this.winningNumList, this.bonusNum));
    });

    this.lottoResultList = lottoResultList.filter((result) => result);
  }
}

module.exports = LottoGame;
