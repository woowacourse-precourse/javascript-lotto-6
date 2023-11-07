import { Console } from '@woowacourse/mission-utils';

class Result {
  constructor(amount) {
    this.six = 0;
    this.fiveAndBonus = 0;
    this.five = 0;
    this.four = 0;
    this.three = 0;
    this.amount = amount;
  }

  startNumberComparison(userLottoList, winningNumber, bonusNumber) {
    userLottoList.forEach((lottoNumber) => {
      const comparisonResult = winningNumber.numberComparison(lottoNumber, bonusNumber);
      this.resultRanking(comparisonResult);
    });
    return this.printResult();
  }

  resultRanking(result) {
    if (result == 'six') this.six += 1;
    if (result == 'fiveAndBonus') this.fiveAndBonus += 1;
    if (result == 'five') this.five += 1;
    if (result == 'four') this.four += 1;
    if (result == 'three') this.three += 1;

    return;
  }

  printResult() {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.three}개`);
    Console.print(`4개 일치 (50,000원) - ${this.four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.five}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.fiveAndBonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.six}개`);
    this.printRateOfReturn();
  }
  printRateOfReturn() {
    const profit =
      this.six * 200000000 +
      this.fiveAndBonus * 30000000 +
      this.five * 1500000 +
      this.four * 50000 +
      this.three * 5000;
    const rateOfReturn = (profit / this.amount) * 100;
    Console.print(`총 수익률은${rateOfReturn.toFixed(2)}입니다.`);
  }
}

export default Result;
