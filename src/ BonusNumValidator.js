import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/message";

class BonusNumValidator {
  #winnerLotto;
  #bonusNum;

  constructor(winnerLotto) {
    this.#winnerLotto = winnerLotto;
  }

  async getBonusNum() {
    let inputBonusNum;
    let valid;

    do {
      inputBonusNum = await Console.readLineAsync(GAME_MESSAGE.promptBonusNum);
      Console.print(inputBonusNum);
      valid = this.validateBonusNum(inputBonusNum);
    } while (!valid);

    this.#bonusNum = inputBonusNum;
  }

  validateBonusNum(inputBonusNum) {
    try {
      if (
        inputBonusNum === true ||
        inputBonusNum === false ||
        isNaN(inputBonusNum)
      )
        throw new Error(ERROR_MESSAGE.invalidBonusNumNotPositiveInt);
      if (inputBonusNum < 1 || inputBonusNum > 45)
        throw new Error(ERROR_MESSAGE.invalidBonusNumRange);
      this.#winnerLotto.forEach((winnerLottonum) => {
        if (winnerLottonum === Number(inputBonusNum))
          throw new Error(ERROR_MESSAGE.invalidBonusNumDuplicate);
      });

      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  get bonusNum() {
    return this.#bonusNum;
  }
}

export default BonusNumValidator;
