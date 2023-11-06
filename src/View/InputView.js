import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async requestPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        this.validatePurchaseAmount(purchaseAmount);
        return Number(purchaseAmount);
      }
      catch (error) {
        Console.print(error);
      }
    }
  }

  static validatePurchaseAmount(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw '[ERROR] 구입금액은 숫자로 입력해야 합니다.';
    }
    if (purchaseAmount <= 0) {
      throw '[ERROR] 구입금액은 양수여야 합니다.';
    }
    if (purchaseAmount % 1000 !== 0) {
      throw '[ERROR] 구입금액은 1000원으로 나누어 떨어져야 합니다.';
    }
  }

  static async requestWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
        this.validateWinningNumbers(winningNumbers.split(','));
        return winningNumbers.split(',').map(Number);
      }
      catch (error) {
        Console.print(error);
      }
    }
  }

  static validateWinningNumbers(winningNumbers) {
    const areAllNumbers = winningNumbers.every(number => !isNaN(number));
    if (!areAllNumbers) {
      throw '[ERROR] 당첨 번호는 숫자여야 합니다.';
    }
    if (!winningNumbers.every((number) => number >= 1 && number <= 45)) {
      throw '[ERROR] 당첨 번호는 1부터 45 범위 내이어야 합니다.';
    }
    if (winningNumbers.length !== 6) {
      throw '[ERROR] 당첨 번호는 6개여야 합니다.';
    }
    const set = new Set(winningNumbers);
    if (winningNumbers.length !== set.size) {
      throw '[ERROR] 중복된 숫자를 입력하면 안됩니다.';
    }
  }

  static async requestBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        this.validateBonusNumber(bonusNumber, winningNumbers)
        return Number(bonusNumber);
      }
      catch (error) {
        Console.print(error);
      }
    }
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw '[ERROR] 보너스 번호는 1부터 45 범위 내이어야 합니다.';
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw '[ERROR] 당첨 번호와 중복된 숫자를 입력하면 안됩니다.'
    }
    if (isNaN(bonusNumber)) {
      throw '[ERROR] 당첨 번호는 숫자여야 합니다.';
    }
  }
}

export default InputView;
