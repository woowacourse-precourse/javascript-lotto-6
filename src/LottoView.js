import { Console } from '@woowacourse/mission-utils';

export class View {
  async getLottoPerchaseAmount() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.');
  }
}
