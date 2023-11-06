import { Console } from '@woowacourse/mission-utils';

class Message {
  static youBought(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }
}

export default Message;
