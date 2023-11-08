import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printResult(results) {
    this.printHeader();
    this.printStatistics(results);
  }

  printHeader() {
    Console.print('당첨 통계\n---');
  }

  printStatistics(results) {
    for (const resultKey in results) {
      if (Object.prototype.hasOwnProperty.call(results, resultKey)) {
        const result = results[resultKey];
        this.printStatistic(resultKey, result);
      }
    }
  }

  printStatistic(resultKey, result) {
    switch (resultKey) {
      case '총 수익률':
        Console.print(`${resultKey}은 ${result}입니다.`);
        break;
      default:
        if (resultKey !== '0') {
          Console.print(`${resultKey} - ${result}개`);
        }
        break;
    }
  }
}

export default OutputView;
