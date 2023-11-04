import InputHandler from "./InputHandler.js";

class WinningNumberInput {
  static async collect() {
    const winningNumber =
      await this.createWinningNumberInputHandler().collect();
    const bonusNumber = await this.createBonusNumberInputHandler().collect();
    return [winningNumber, bonusNumber];
  }

  static createWinningNumberInputHandler() {
    return new InputHandler(
      "\n당첨 번호를 입력해 주세요",
      (str) => str.split(",").every((strNum) => !isNaN(Number(strNum))),
      "[ERROR] 당첨 번호는 콤마(,)로 구분된 6개의 숫자여야 합니다."
    );
  }

  static createBonusNumberInputHandler() {
    return new InputHandler(
      "\n보너스 번호를 입력해 주세요.",
      (strNum) => !Number.isNaN(Number(strNum)),
      "[ERROR] 보너스 번호는 하나의 숫자여야 합니다."
    );
  }
}

export default WinningNumberInput;
