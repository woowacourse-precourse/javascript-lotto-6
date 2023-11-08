import { Console } from '@woowacourse/mission-utils';
import Format from './Format.js';
import { LOTTO_STATISTICS, LOTTO_STATISTICS_TITLE } from '../constants/number.js';

class Message {
  /**
   * 에러 객체를 받아 에러 메시지를 출력하는 메서드
   * @param {Error} error
   */
  static error(error) {
    Console.print(error.message);
  }

  /**
   * 몇 개를 구매했는지 출력하는 메서드
   * @param {number} count
   */
  static youBought(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  }

  /**
   * 배열을 출력하는 메서드
   * @param {number[]} arr
   */
  static array(arr) {
    Console.print(Format.array(arr));
  }

  /**
   * 등수 별 당첨 횟수와 수익률을 출력하는 메서드
   * @param {number[]} rankCount 등수 별 당첨 횟수
   * @param {number} profitRate 수익률
   */
  static showStatistics(rankCount, profitRate) {
    Console.print(LOTTO_STATISTICS_TITLE);
    LOTTO_STATISTICS.forEach((statistics, index) => {
      Console.print(statistics(rankCount[index]));
    });
    Console.print(`총 수익률은 ${Format.rate(profitRate)}입니다.`);
  }
}

export default Message;
