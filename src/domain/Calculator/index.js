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
      const winningNumbers = this.#formatWinningNumbers(inputWinningNumbersStr);
      this.#validateWinningNumbers(winningNumbers);
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
      this.#validateLottoNumber(bonusNumber);
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

  #formatWinningNumbers(str) {
    return str.split(",").map(Number);
  }

  #validateWinningNumbers(winningNumbers) {
    if (!Validation.isLength(winningNumbers, LENGTH)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_LENGTH(LENGTH));
    }

    winningNumbers.every((winningNumber) => {
      this.#validateLottoNumber(winningNumber);
    });

    if (!Validation.isUnique(winningNumbers)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_UNIQUE);
    }
  }

  #validateLottoNumber(number) {
    if (!Validation.isNumber(number)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_NUMBER);
    }

    if (!Validation.isOnRange(number, MIN, MAX)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_ON_RANGE(MIN, MAX));
    }

    if (!Validation.isInteger(number)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_INTEGER);
    }
  }

  #calculateLottoWinnings(lottos) {
    let lottoWinnings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    lottos.forEach((lotto) => {
      const matchCount = this.#calculateMatchCount(lotto);
      const hasBonus = lotto.includes(this.#bonusNumber);

      if (matchCount < 3) return; // 3개 미만은 당첨되지 않으므로 반환

      const rank = this.#getRank(matchCount, hasBonus);
      if (rank) lottoWinnings[rank]++;
    });

    return Object.values(lottoWinnings).reverse();
  }

  #calculateMatchCount(lotto) {
    return lotto.filter((number) => this.#winningNumbers.includes(number))
      .length;
  }

  #getRank(matchCount, hasBonus) {
    const rankByMatchCount = {
      6: 1,
      5: hasBonus ? 2 : 3,
      4: 4,
      3: 5,
    };
    return rankByMatchCount[matchCount];
  }

  #calculateTotalReturn(lottoWinnings, boughtAmount) {
    let totalWinningAmount = 0;
    lottoWinnings.forEach((x, i) => {
      totalWinningAmount += x * LOTTO_RULE.WINNING_AMOUNT[5 - i];
    });
    return ((totalWinningAmount / boughtAmount) * 100).toFixed(1);
  }
}
