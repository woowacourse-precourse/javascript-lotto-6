import { Console } from '@woowacourse/mission-utils';

class Result {
  constructor() {
    this.six = 0;
    this.fiveAndBonus = 0;
    this.five = 0;
    this.four = 0;
    this.three = 0;
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
  }
}
export default Result;
