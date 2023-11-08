import { LOTTO_RULE } from "../../constants";
import { MESSAGES } from "../../constants/messages";
import { CustomError } from "../../exception";
import { Validation } from "../../utils";
import { InputView, OutputView } from "../../view";

const LENGTH = LOTTO_RULE.LENGTH;
const MIN = LOTTO_RULE.RANGE.MIN;
const MAX = LOTTO_RULE.RANGE.MAX;

export class Calculator {
  #winningNumbers;
  #bonusNumber;

  async promptWinningNumber() {
    try {
      const inputWinningNumbersStr = await InputView.readLine(
        MESSAGES.WINNING_NUMBER.PLACE_HOLDER
      );
      const winningNumbers = this.#formatWinningNumber(inputWinningNumbersStr);
      this.#validateWinningNumber(winningNumbers);
      this.#winningNumbers = winningNumbers;
    } catch (error) {
      OutputView.print(error.message);
      await this.promptWinningNumber();
    }
  }

  async promptBonusNumber() {
    try {
      const inputBonusNumberStr = await InputView.readLine(
        MESSAGES.BONUS_NUMBER.PLACE_HOLDER
      );
      const bonusNumber = Number(inputBonusNumberStr);
      this.#validateBonusNumber(bonusNumber);
      this.#bonusNumber = bonusNumber;
    } catch (error) {
      OutputView.print(error.message);
      await this.promptBonusNumber();
    }
  }

  getWinningsResult(lottos) {
    const lottoWinningsResult = this.#calculateLottoWinnings(lottos);
    const boughtAmount = lottos.length * LOTTO_RULE.PRICE;
    const totalReturn = this.#calculateTotalReturn(
      lottoWinningsResult,
      boughtAmount
    );
    return { lottoWinningsResult, totalReturn };
  }

  #formatWinningNumber(str) {
    return str.split(",").map(Number);
  }

  #validateWinningNumber(winningNumbers) {
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

  #validateBonusNumber(bonusNumber) {
    if (!Validation.isNumber(bonusNumber)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_NUMBER);
    }

    if (!Validation.isOnRange(bonusNumber, MIN, MAX)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_ON_RANGE(MIN, MAX));
    }

    if (!Validation.isInteger(bonusNumber)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_INTEGER);
    }
  }

  #calculateLottoWinnings(lottos) {
    let lottoWinnings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    lottos.forEach((lotto) => {
      const matchCount = this.#calculateMatchCount(lotto);

      if (matchCount === 6) {
        lottoWinnings[1] += 1;
        return;
      }

      if (matchCount === 5 && lotto.includes(this.#bonusNumber)) {
        lottoWinnings[2] += 1;
        return;
      }

      if (matchCount === 5) {
        lottoWinnings[3] += 1;
        return;
      }

      if (matchCount === 4) {
        lottoWinnings[4] += 1;
        return;
      }

      if (matchCount === 3) {
        lottoWinnings[5] += 1;
        return;
      }

      return;
    });

    return Object.values(lottoWinnings).reverse();
  }

  #calculateMatchCount(lotto) {
    return lotto.filter((number) => this.#winningNumbers.includes(number))
      .length;
  }

  #calculateTotalReturn(lottoWinnings, boughtAmount) {
    let totalWinningAmount = 0;
    lottoWinnings.forEach((x, i) => {
      totalWinningAmount += x * LOTTO_RULE.WINNING_AMOUNT[5 - i];
    });
    return ((totalWinningAmount / boughtAmount) * 100).toFixed(1);
  }
}
