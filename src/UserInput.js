import { Console } from "@woowacourse/mission-utils";
import ValidateInput from "./ValidateInput.js";

class UserInput {
  static async getAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해주세요.\n");
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
        const input =
          await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
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
          "\n보너스 번호를 입력해주세요.\n",
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
