import { Console } from '@woowacourse/mission-utils';

class View {
  async inputPay() {
    const input = await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);
    // 천원단위가 아니면 오류
  }

  async inputWinNumbers() {}

  async inputBonusNumber() {}

  as;
}

export default View;
