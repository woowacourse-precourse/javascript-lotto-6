import { Console } from "@woowacourse/mission-utils";
import LottoValidator from "../LottoValidator.js";
class InputView {
  async getBuyMoneyInput() {
    let isValidInput = false;
    let userMoneyNumber;

    while (!isValidInput) {
      try {
        const userMoneyInput = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        userMoneyNumber = Number(userMoneyInput);
        LottoValidator.validateMoneyInput(userMoneyNumber);
        isValidInput = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return userMoneyNumber;
  }

  async getTargetLottoInfoInput() {
    const targetNumberList = await this.#getTargetLottoNumberInput();
    const targetBonusNumber = await this.#getTargetLottoBonusNumberInput(
      targetNumberList
    );

    return { targetNumberList, targetBonusNumber };
  }

  async #getTargetLottoNumberInput() {
    let isValidInput = false;
    let targetNumberList;
    while (!isValidInput) {
      try {
        const targetLottoInput = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        targetNumberList = targetLottoInput.split(",").map(Number);
        LottoValidator.validateLottoNumbersInput(targetNumberList);
        isValidInput = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return targetNumberList;
  }

  async #getTargetLottoBonusNumberInput(targetNumberList) {
    let isValidInput = false;
    let targetBonusNumber;
    while (!isValidInput) {
      try {
        const targetBonusInput = await Console.readLineAsync(
          "보너스 번호를 입력해 주세요\n"
        );
        targetBonusNumber = Number(targetBonusInput);
        LottoValidator.validateBonusNumber(targetNumberList, targetBonusNumber);
        isValidInput = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return targetBonusNumber;
  }
}

export default InputView;
