import { Console } from '@woowacourse/mission-utils';

class Input {
  static async getPurchaseAmount () {
    const lottoPurchaseAmount = await Console.readLineAsync(
      "구매금액을 입력해 주세요.\n"
    );
    return lottoPurchaseAmount;
  }
}

export default Input;