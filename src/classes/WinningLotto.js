import { MissionUtils } from "@woowacourse/mission-utils";
import {
  validationUserMoney,
  validationWinnerNumber,
  validationBonusNumber,
} from "../validation.js";

const LOTTOPRICE = 1000;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

const Console = MissionUtils.Console;

class WinningLotto {
  #number;
  #bonusNumber;

  async createWinningNumber() {
    const inputNumber = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    this.#number = inputNumber.split(",").map((number) => +number);
    return inputNumber.split(",").map((number) => +number);
  }

  async createBonusNumber() {
    const lottoBonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    this.#bonusNumber = lottoBonusNumber.split(",").map((number) => +number);
    return lottoBonusNumber.split(",").map((number) => +number);
  }

  qualificationLottoNumber(number) {
    if (number < MIN_NUMBER || number > MAX_NUMBER) {
      throw new Error("[ERROR] 1~45 내의 숫자를 입력해주세요.");
    }
    if (!+number) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
  }

  validationWinnerNumber(winnerNumbers) {
    winnerNumbers.forEach((winnerNumber) =>
      this.qualificationLottoNumber(winnerNumber)
    );
  }

  qualificationBonusNumber(bonusNumber, winnerNumber) {
    if (bonusNumber == winnerNumber) {
      throw new Error("[ERROR] 당첨 번호와 다른 번호를 입력하세요.");
    }
  }

  validationBonusNumber(bonusNumber, winnerNumbers) {
    winnerNumbers.forEach((winnerNumber) =>
      this.qualificationBonusNumber(bonusNumber, winnerNumber)
    );
    this.qualificationLottoNumber(bonusNumber);
  }
}

export default WinningLotto;
