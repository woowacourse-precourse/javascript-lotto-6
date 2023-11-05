import { Console } from '@woowacourse/mission-utils';
import { makeNumberOfLottoMessageFn, MESSAGE, makeRateOfReturnMessageFn } from '../constants/message.js';

class OutputView {
  /**
   * 총구매 내역과 로또 리스트 출력
   * @param {number} number
   * @param {number[][]} lottos
   */
  static printPurchacingLotto(number, lottos) {
    Console.print(makeNumberOfLottoMessageFn(number));
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
    OutputView.printBlank();
  }

  /**
   *  당첨 통계 출력
   */
  static printWinningStatistics() {
    Console.print(MESSAGE.WINNING_STATISICS);
  }

  /**
   * 일치하는 숫자 여부 확인 메시지 출력
   * @param {number} number
   * @param {(number:number)=> string} fn
   */
  static printMatching(number, fn) {
    Console.print(fn(number));
  }

  /**
   * 총 수익률 출력
   * @param {number} rate
   */
  static printRateOfReturn(rate) {
    Console.print(makeRateOfReturnMessageFn(rate));
  }

  static printBlank() {
    Console.print(MESSAGE.BLANK);
  }
}

export default OutputView;
