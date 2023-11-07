import { Console } from '@woowacourse/mission-utils';

class Input {
  static async getPurchaseAmount () {
    const lottoPurchaseAmount = await Console.readLineAsync(
      "구매금액을 입력해 주세요.\n"
    );
    return lottoPurchaseAmount;
  }
  static async getWinningNumber() {
    const lottoWinningNumber = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    )
    return lottoWinningNumber;
  }
}

export default Input;