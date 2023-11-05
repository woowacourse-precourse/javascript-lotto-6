import { Console } from '@woowacourse/mission-utils';

class Input {
  static async getPurchaseAmount() {
    try {
      const input = await Console.readLineAsync('구입금액을 입력해 주세요.');
      const amount = parseInt(input, 10);

      if (amount % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
      }

      return amount;
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  static async getWinningNumbers() {
    try {
      const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
      const numbers = input.split(',').map((num) => parseInt(num, 10));

      if (numbers.some((num) => num < 1 || num > 45)) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }

      if (new Set(numbers).size !== 6) {
        throw new Error('[ERROR] 중복되지 않는 6개의 숫자를 입력해주세요.');
      }

      return numbers;
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  static async getBonusNumber() {
    try {
      const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.');
      const bonusNumber = parseInt(input, 10);

      if (bonusNumber < 1 || bonusNumber > 45) {
        throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
      }

      return bonusNumber;
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default Input;