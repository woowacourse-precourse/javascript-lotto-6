import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printResult(results) {
    Console.print('당첨 통계\n---');
    for (const resultKey in results) {
      const result = results[resultKey];
      if (resultKey === '총 수익률') {
        Console.print(`${resultKey}은 ${result}입니다.`);
      } else if (resultKey !== '0') {
        Console.print(`${resultKey} - ${result}개`);
      }
    }
  }
}
export default OutputView;
