import { Console } from '@woowacourse/mission-utils';

class User {
  #purchaseAmount;
  constructor(userInputPurchaseAmount) {
    this.#validate(userInputPurchaseAmount);
    this.#purchaseAmount = userInputPurchaseAmount;
  }

  #validate(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 구매 가능합니다.');
    }
    if (numbers < 1000 || numbers > 100000) {
      throw new Error(
        '[ERROR] 건전한 도박 문화를 위해 1 ~ 10장까지만 구매 가능합니다.',
      );
    }
  }
}

export function userInput() {
  const purchaseAmount = Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return purchaseAmount;
}
export default User;
