import { Console } from '@woowacourse/mission-utils';
import PRIZE from './constants/Prize.js';

const Print = {
  printPurchase(count) {
    Console.print(`${count}개를 구매했습니다.`);
  },
  printResults(results) {
    Console.print('당첨 통계\n---');
    Console.print(
      `3개 일치 (${PRIZE.three.toLocaleString('ko-KR')}원) - ${
        results[PRIZE.three]
      }개`
    );
    Console.print(
      `4개 일치 (${PRIZE.four.toLocaleString('ko-KR')}원) - ${
        results[PRIZE.four]
      }개`
    );
    Console.print(
      `5개 일치 (${PRIZE.five.toLocaleString('ko-KR')}원) - ${
        results[PRIZE.five]
      }개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZE.fivePlus.toLocaleString(
        'ko-KR'
      )}원) - ${results[PRIZE.fivePlus]}개`
    );
    Console.print(
      `6개 일치 (${PRIZE.six.toLocaleString('ko-KR')}원) - ${
        results[PRIZE.six]
      }개`
    );
  },
  printNewLine() {
    Console.print('');
  },
};
export default Print;
