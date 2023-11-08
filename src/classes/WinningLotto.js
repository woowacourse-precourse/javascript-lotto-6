import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";

const Console = MissionUtils.Console;

class WinningLotto {
  constructor(number, bonusNumber) {
    this.number = number;
    this.bonusNumber = bonusNumber;
  }

  static async createWinningNumber() {
    const inputNumber = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    return inputNumber;
  }

  static async createBonusNumber() {
    const lottoBonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
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
