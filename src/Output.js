import { Console } from '@woowacourse/mission-utils';

const FIRST_PRIZE = 2000000000;
const SECOND_PRIZE = 30000000;
const THIRD_PRIZE = 1500000;
const FOURTH_PRIZE = 50000;
const FIFTH_PRIZE = 5000;

class Output {
  printMyLottoList(purchaseCount, myLottoList) {
    Console.print(`${purchaseCount}개를 구매했습니다.`);

    myLottoList.forEach((lotto) => {
      Console.print(JSON.stringify(lotto.getNumbers()).replaceAll(',', ', '));
    });
  }

  printWinningResult({ first, second, third, fourth, fifth }) {
    Console.print('당첨 통계\n---\n');
    Console.print(
      `3개 일치 (${FIFTH_PRIZE.toLocaleString()}원) - ${fifth.length}개`
    );
    Console.print(
      `4개 일치 (${FOURTH_PRIZE.toLocaleString()}원) - ${fourth.length}개`
    );
    Console.print(
      `5개 일치 (${THIRD_PRIZE.toLocaleString()}원) - ${third.length}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${SECOND_PRIZE.toLocaleString()}원) - ${
        second.length
      }개`
    );
    Console.print(
      `6개 일치 (${FIRST_PRIZE.toLocaleString()}원) - ${first.length}개`
    );
  }

  printLottoROI(lottoROI) {
    Console.print(`총 수익률은 ${lottoROI}%입니다.`);
  }
}

export default Output;
