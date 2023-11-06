import { Console } from '@woowacourse/mission-utils';
import {
  makeNumberOfLottoMessageFn,
  MESSAGE,
  makeRateOfReturnMessageFn,
  MESSAGE_MATCHING,
} from '../constants/message.js';

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
  }

  /**
   *  당첨 통계 출력
   */
  static printWinningStatistics() {
    Console.print(MESSAGE.WINNING_STATISICS);
  }

  /**
   * 일치하는 숫자 여부 확인 메시지 출력
   * @param {{ three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }} match
   */
  static printMatching(match) {
    const keys = Object.keys(match);
    keys.forEach((key) => {
      Console.print(MESSAGE_MATCHING[key](match[key]));
    });
  }

  /**
   * 총 수익률 출력
   * @param {number} rate
   */
  static printRateOfReturn(rate) {
    Console.print(makeRateOfReturnMessageFn(rate));
  }

  /**
   * Error 발생시 Error 메시지 출력
   * @param {string} error
   */
  static printError(error) {
    Console.print(error);
  }
}

export default OutputView;
