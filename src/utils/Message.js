import { Console } from '@woowacourse/mission-utils';

class Message {
  /**
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
    Console.print(`[${arr.join(', ')}]`);
  }
}

export default Message;
