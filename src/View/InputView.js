import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async requestPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return purchaseAmount;
  }
}

export default InputView;