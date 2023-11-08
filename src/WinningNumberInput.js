import InputPrompter from "./InputPrompter.js";
import Lotto from "./Lotto.js";

class WinningNumberInput {
  static async collect() {
    const winningNumber =
      await this.createWinningNumberInputPrompter().collect();
    const bonusNumber = await this.createBonusNumberInputPrompter().collect();
    return [winningNumber, bonusNumber];
  }

  static createWinningNumberInputPrompter() {
    return new InputPrompter("\n당첨 번호를 입력해 주세요", (str) => {
      Lotto.validate(str.split(",").map((strNum) => Number(strNum)));
    });
  }

  static createBonusNumberInputPrompter() {
    return new InputPrompter("\n보너스 번호를 입력해 주세요.", (strNum) => {
      if (Number.isNaN(Number(strNum)))
        throw new Error("[ERROR] 보너스 번호는 하나의 숫자여야 합니다.");
    });
  }
}

export default WinningNumberInput;
