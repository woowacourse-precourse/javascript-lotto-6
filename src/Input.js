import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, ERROR_MESSAGES } from "./constants/messages.js";

export class Input {
  // 입력 받는 기능
  async getMoney() {
    const money = await Console.readLineAsync(MESSAGES.HOW_MUCH + "\n");

    return money;
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBERS + "\n"
    );

    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER + "\n"
    );

    return bonusNumber;
  }

  // 예외 처리 기능
  validateMoney(money) {
    if (!Number(money)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    } else if (Number(money) < 1000) {
      throw new Error(ERROR_MESSAGES.IT_IS_TO_SMALL);
    } else if (money.includes(".") || money.includes(" ")) {
      throw new Error(ERROR_MESSAGES.ONLY_NUMBER);
    } else if (Number(money) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.ONLY_THOUSANDWON_UNIT);
    }
  }

  validateWinningNumbers(numbers) {
    const winningNumbers = numbers.split(",").map(Number);

    if (new Set(winningNumbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
    }

    winningNumbers.forEach((num) => {
      if (num <= 0 || num > 45) {
        throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
      } else if (Number.isNaN(num)) {
        throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
      }
    });
  }

  validateBonusNumber(number, winningNumbers) {
    const bonusNumber = Number(number);

    if (
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      Number.isNaN(bonusNumber) ||
      winningNumbers.includes(bonusNumber)
    ) {
      throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
    }
  }

  // 입력 타입 변환 기능
  convertToNumber(input) {
    return Number(input);
  }

  convertToArray(input) {
    return input.split(",").map(Number);
  }
}
