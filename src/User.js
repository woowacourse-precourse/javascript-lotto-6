import { Console } from '@woowacourse/mission-utils';

class User {
  async inputLottoPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return purchaseAmount;
  }
}

export default User;