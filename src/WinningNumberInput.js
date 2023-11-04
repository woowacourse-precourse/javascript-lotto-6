import InputPrompter from "./InputPrompter.js";

class WinningNumberInput {
  static async collect() {
    const winningNumber =
      await this.createWinningNumberInputPrompter().collect();
    const bonusNumber = await this.createBonusNumberInputPrompter().collect();
    return [winningNumber, bonusNumber];
  }

  static createWinningNumberInputPrompter() {
    return new InputPrompter(
      "\n당첨 번호를 입력해 주세요",
      (str) => str.split(",").every((strNum) => !isNaN(Number(strNum))),
      "[ERROR] 당첨 번호는 콤마(,)로 구분된 6개의 숫자여야 합니다."
    );
  }

  static createBonusNumberInputPrompter() {
    return new InputPrompter(
      "\n보너스 번호를 입력해 주세요.",
      (strNum) => !Number.isNaN(Number(strNum)),
      "[ERROR] 보너스 번호는 하나의 숫자여야 합니다."
    );
  }
}

export default WinningNumberInput;
