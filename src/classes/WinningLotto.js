import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";
import { inputMessage } from "../Constant.js";

const Console = MissionUtils.Console;

class WinningLotto {
  constructor(number, bonusNumber) {
    this.number = number;
    this.bonusNumber = bonusNumber;
  }

  static async createWinningNumber() {
    const inputNumber = await Console.readLineAsync(
      inputMessage.GET_WINNER_NUMBERS
    );
    return inputNumber;
  }

  static async createBonusNumber() {
    const lottoBonusNumber = await Console.readLineAsync(
      inputMessage.GET_BONUS_NUMBER
    );
    return lottoBonusNumber;
  }

  static async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await WinningLotto.createWinningNumber();
        Validation.winningNumber(winningNumbers);
        return winningNumbers.split(",").map((number) => +number);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await WinningLotto.createBonusNumber();
        Validation.bonusNumber(winningNumbers, bonusNumber);
        return +bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default WinningLotto;
