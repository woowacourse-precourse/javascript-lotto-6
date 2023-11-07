import { Console } from '@woowacourse/mission-utils';
import { EXCEPTION, OUTPUT } from '../constants/constants.js';

const WINNING_MESSAGE = [
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - ',
];

const OutputView = {
  /**
   * 구매개수 출력 함수
   * @param {number} count
   */
  lottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },
  /**
   * 구입금액 에러 메세지 출력 함수
   * @param {string} error
   */
  moneyError(error) {
    Console.print(error);
  },
  /**
   * 구입한 로또 출력 함수
   * @param {string[]} lotto
   */
  lottoList(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  },
  /**
   * 당첨 통계 결과 출력 함수
   * @param {number[]} counts
   */
  result(counts) {
    Console.print(OUTPUT.WINNING_RESULT);
    Console.print(OUTPUT.BAR);
    counts.forEach((count, idx) => {
      Console.print(`${WINNING_MESSAGE[idx]}${count}개`);
    });
  },
  /**
   * 수익률 출력 함수
   * @param {number} percent
   */
  profit(percent) {
    Console.print(`총 수익률은 ${percent}%입니다.`);
  },
};

export default OutputView;
