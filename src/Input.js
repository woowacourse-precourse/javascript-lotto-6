// import { Random, Console } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class Input {
  async getPurchaseAmount() {
    try {
      const purchaseAmount =
        await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      const amount = parseInt(purchaseAmount);

      this.validateGetPurchaseAmount(amount);
      return amount;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  validateGetPurchaseAmount(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw new Error('[ERROR] 구입금액은 숫자여야 합니다.');
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000의 배수여야 합니다.');
    }
  }

  async getWinningNumbers() {
    try {
      const input = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n',
      );
      const numbers = input.split(',').map(Number);
      this.validateWinningNumbers(input, numbers);
      return numbers;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  validateWinningNumbers(input, numbers) {
    const numberOfCommas = (input.match(/,/g) || []).length;
    if (numberOfCommas !== 5 || numbers.length !== 6) {
      throw new Error('[ERROR] 쉼표(,)를 기준으로 숫자 6개를 입력해야 합니다.');
    }
    if (numbers.some(isNaN)) {
      throw new Error('[ERROR] 당첨 번호는 숫자이어야 합니다.');
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 당첨 번호 6개는 중복되지 않아야 합니다.');
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n',
      );
      const bonusNumber = parseInt(input);

      this.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error('[ERROR] 숫자 1개를 입력해야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(
        '[ERROR] 보너스 번호는 앞서 입력한 당첨 번호와 중복되지 않아야 합니다.',
      );
    }
  }
}
export default Input;
