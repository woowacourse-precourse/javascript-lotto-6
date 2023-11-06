import { Console } from '@woowacourse/mission-utils';

class Input {
  async askPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요.'
    );

    return purchaseAmount;
  }
}

export default Input;
