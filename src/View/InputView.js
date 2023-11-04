import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async requestPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return purchaseAmount;
  }

  static validatePurchaseAmount(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw new Error('[ERROR] 구입금액은 숫자로 입력해야 합니다.');
    }
    if (Number(purchaseAmount) <= 0) {
      throw new Error('[ERROR] 구입금액은 양수여야 합니다.');
    }
    if (Number(purchaseAmount) % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000원으로 나누어 떨어져야 합니다.');
    }
  }

  static async requestWinningNumbers() {
    const winningNumbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return winningNumbers;
  }

  static async requestBonusNumber() {
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  }
}

export default InputView;
