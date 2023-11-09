import { Console } from '@woowacourse/mission-utils';
import PRIZE from './constants/Prize.js';

const Print = {
  printPurchase(count) {
    Console.print(`${count}개를 구매했습니다.`);
  },
  printArray(array) {
    Console.print(`[${array.join(', ')}]`);
  },
  printResults(results) {
    const printResult = (syncNumber, prize, number, plus = false) => {
      const message = plus
        ? `${syncNumber}개 일치, 보너스 볼 일치`
        : `${syncNumber}개 일치`;
      Console.print(
        `${message} (${prize.toLocaleString('ko-KR')}원) - ${number}개`
      );
    };
    Console.print('당첨 통계\n---');
    printResult(3, PRIZE.three, results[PRIZE.three]);
    printResult(4, PRIZE.four, results[PRIZE.four]);
    printResult(5, PRIZE.five, results[PRIZE.five]);
    printResult(5, PRIZE.fivePlus, results[PRIZE.fivePlus], true);
    printResult(6, PRIZE.six, results[PRIZE.six]);
  },
  printReturnRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  },
  printNewLine() {
    Console.print('');
  },
};
export default Print;
