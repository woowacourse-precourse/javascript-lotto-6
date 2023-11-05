import { Console } from "@woowacourse/mission-utils";

class Input {
  static async getPurchaseAmount() {
    try {
      const input = await Console.readLineAsync('구입 금액을 입력해 주세요: ');
      const purchaseAmount = parseInt(input, 10);

      if (purchaseAmount % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력해야 합니다.");
      }

      return purchaseAmount;
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  static async getWinningNumbers() {
    try {
      const input = await Console.readLineAsync('당첨 번호를 입력해 주세요(쉼표로 구분): ');
      const winningNumbers = input.split(',').map((num) => parseInt(num, 10));

      if (winningNumbers.length !== 6 || !this.isValidRange(winningNumbers)) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 6개의 숫자여야 합니다.");
      }

      return winningNumbers;
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
  static async getBonusNumber() {
    try {
      const input = await Console.readLineAsync('보너스 번호를 입력해 주세요: ');
      const bonusNumber = parseInt(input, 10);

      if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
        throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
      }

      return bonusNumber;
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  static isValidRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }
}
export default Input;