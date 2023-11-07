import { Console } from "@woowacourse/mission-utils";
import ValidateInput from "../utils/ValidateInput.js";
import InputConstants from "../Constants/InputConstants.js";

class UserInput {
  static async getAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync(InputConstants.INPUT_AMOUNT);
        const amount = Number(input);
        ValidateInput.validateAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getWinningNumber() {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          InputConstants.INPUT_WINNING_NUMBERS,
        );
        const numbers = input.split(",").map((item) => Number(item.trim()));
        ValidateInput.validateWinningNumber(numbers);
        return numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getBonusNumber(winningNumber) {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          InputConstants.INPUT_BONUS_NUMBER,
        );
        const number = Number(input);
        ValidateInput.validateBonusNumber(number, winningNumber);
        return number;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default UserInput;
