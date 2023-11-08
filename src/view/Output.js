import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_LOTTO_COUNT } from '../constant/OutputMessage.js';

const Output = {
  async printLottoCount(lottoCount) {
    await Console.print(`\n${lottoCount}${OUTPUT_LOTTO_COUNT}`);
  },
  async printLottoList(lottoList) {
    lottoList.map((lotto) => {
      lotto.sort((pre, next) => {
        return pre - next;
      });
    });

    lottoList.forEach((lotto) => {
      Console.print(
        `[${lotto.map((num, idx) => {
          return idx > 0 && idx < lotto.length ? ` ${num}` : `${num}`;
        })}]`
      );
    });
  },
  printWinnerStatistics(resultMap) {
    Console.print('\n당첨 통계\n---');
    const price = ['', '', '5,000', '50,000', '1,500,000', '2,000,000,000'];

    resultMap.forEach((totalCnt, sameNum) => {
      if (sameNum > 2 && sameNum !== 6) {
        if (sameNum === 7) sameNum = 6;
        Console.print(
          `${sameNum}개 일치 (${price[sameNum - 1]}원) - ${totalCnt}개`
        );
      } else if (sameNum === 6) {
        Console.print(
          `5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalCnt}개`
        );
      }
    });
  },
  printTotalReturn(totalReturn) {
    Console.print(`총 수익률은 ${totalReturn}%입니다.`);
  },
};

export default Output;
