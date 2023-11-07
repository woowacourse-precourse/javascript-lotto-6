import { Console } from '@woowacourse/mission-utils';

class Vendor {
  async buyTickets() {
    const user = await Console.readLineAsync('구입금액을 입력해 주세요..\n');
    const paid = parseInt(user, 10);
  }
}
