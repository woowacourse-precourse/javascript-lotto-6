import { MissionUtils } from "@woowacourse/mission-utils";

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
}

export default WinningLotto;
