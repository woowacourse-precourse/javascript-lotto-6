// import { Random, Console } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class Input {
  async getPurchaseAmount() {
    try {
      const purchaseAmount =
        await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      if (this.validateGetPurchaseAmount(purchaseAmount)) {
        return parseInt(purchaseAmount);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  validateGetPurchaseAmount(purchaseAmount) {
    const amount = parseInt(purchaseAmount);
    if (isNaN(amount)) {
      throw new Error('[ERROR] 구입금액은 숫자여야 합니다.');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000의 배수여야 합니다.');
    }
  }
}
export default Input;
