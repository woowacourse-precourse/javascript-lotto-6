import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, OPTION } from './Constant.js';

const OutputView = {
  /**
   * 구매한 로또의 개수와 번호 출력
   * @param {numbers: number[][]} lottoes
   */
  printBuyResult: (numbers) => {
    Console.print(`\n${numbers.length}개를 구매했습니다.`);
    numbers.forEach((number) => {
      Console.print(`[${number.join(', ')}]`);
    });
  },

  /**
   * 순위에 맞는 탕첨 일치 문구를 반환
   * @param {number} rank
   * @returns {string}
   */
  getCorrectMessage: (rank) => {
    if (rank > 2) {
      return `${OPTION.BALL_COUNT - rank + 2}개 일치`;
    }
    if (rank === 2) {
      return `${OPTION.BALL_COUNT - 1}개 일치, 보너스 볼 일치`;
    }
    return `${OPTION.BALL_COUNT}개 일치`;
  },

  /**
   * 로또 당첨 통계 출력
   * @param {number[]} result
   * @param {number} profit
   */
  printWinningResult: (results, profit) => {
    Console.print(MESSAGE.WINNING_RESULT);
    results.forEach((result, index) => {
      Console.print(
        `${OutputView.getCorrectMessage(
          OPTION.WINNING_RANKING - index,
        )} (${OPTION.LOTTO_PRIZE[
          OPTION.WINNING_RANKING - index - 1
        ].toLocaleString()}원) - ${result}개`,
      );
    });
    Console.print(`총 수익률은 ${profit}%입니다.`);
  },

  /**
   * 에러 메시지 출력
   * @param {Error} error
   */
  printError: (error) => {
    Console.print(error.message);
  },
};

export default OutputView;
