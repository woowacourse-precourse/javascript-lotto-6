import { LOTTO_RULE } from "../../constants";
import { MESSAGES } from "../../constants/messages";
import { CustomError } from "../../exception";
import { Validation } from "../../utils";
import { InputView, OutputView } from "../../view";

const LENGTH = LOTTO_RULE.LENGTH;
const MIN = LOTTO_RULE.RANGE.MIN;
const MAX = LOTTO_RULE.RANGE.MAX;

export class LottoDrawMachine {
  #winningNumbers;
  #bonusNumber;

  async promptWinningNumber() {
    const inputWinningNumbersStr = await InputView.readLine(
      MESSAGES.WINNING_NUMBER.PLACE_HOLDER
    );
    const winningNumbers = this.#formatWinningNumber(inputWinningNumbersStr);
    this.#validateWinningNumber(winningNumbers);
    this.#winningNumbers = winningNumbers;
    OutputView.print(this.#winningNumbers.join(","));
  }

  #formatWinningNumber(str) {
    return str.split(",").map(Number);
  }

  #validateWinningNumber(winningNumbers) {
    console.log(winningNumbers);
    if (!Validation.isLength(winningNumbers, LENGTH)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_LENGTH(LENGTH));
    }

    winningNumbers.every((winningNumber) => {
      if (!Validation.isNumber(winningNumber)) {
        throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_NUMBER);
      }

      if (!Validation.isOnRange(winningNumber, MIN, MAX)) {
        throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_ON_RANGE(MIN, MAX));
      }

      if (!Validation.isInteger(winningNumber)) {
        throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_INTEGER);
      }
    });

    if (!Validation.isUnique(winningNumbers)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_UNIQUE);
    }
  }
}
