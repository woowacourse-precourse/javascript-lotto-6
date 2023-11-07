import Validator from "./Validator.js";
import LOTTO from "./constant/LOTTO.js";
import PRIZE from "./constant/PRIZE.js";

class LottoPrizeManager {
  #winningNumberArray;
  #bonusNumber;

  constructor(winningNumberString, bonusNumberString) {
    this.#validateWinningNumber(winningNumberString);
    this.#winningNumberArray = winningNumberString.split(",").map(Number);

    this.#validateBonusNumber(bonusNumberString);
    this.#bonusNumber = Number(bonusNumberString);
  }

  #validateWinningNumber(string) {
    const regex = /^[0-9,]+$/;
    if (!regex.test(string)) {
      throw new Error(PRIZE.ERROR.WINNING_NUMBER_STRING_TYPE);
    }

    const array = string.split(",");

    if (!Validator.isArrayLengthEqualTo(array, LOTTO.SIZE)) {
      throw new Error(PRIZE.ERROR.WINNING_NUMBER_SIZE);
    }

    if (!array.every((numStr) => Validator.isInLottoNumberRange(numStr))) {
      throw new Error(PRIZE.ERROR.WINING_NUMBER_RANGE_NUMBER);
    }

    if (Validator.hasDuplicate(array)) {
      throw new Error(PRIZE.ERROR.WINING_NUMBER_DUPLICATE);
    }
  }

  #validateBonusNumber(numStr) {
    if (!Validator.isInLottoNumberRange(numStr)) {
      throw new Error(PRIZE.ERROR.BONUS_NUMBER_RANGE_NUMBER);
    }

    if (Validator.hasDuplicate([...this.#winningNumberArray, Number(numStr)])) {
      throw new Error(PRIZE.ERROR.BONUS_NUMBER_DUPLICATE);
    }
  }

  #filterMatchingNumbers(numberArray) {
    const matchedNumber = numberArray.filter((number) =>
      this.#winningNumberArray.includes(number)
    );
    const isBonusNumberMatched = numberArray.includes(this.#bonusNumber);

    return { matchedNumber, isBonusNumberMatched };
  }

  #getPrizeRank(numberArray) {
    const { matchedNumber, isBonusNumberMatched } =
      this.#filterMatchingNumbers(numberArray);

    const matchedRank = Object.entries(PRIZE.RANK).find(
      ([_, { MATCHED_COUNT, BONUS_MATCH }]) => {
        return (
          matchedNumber.length === MATCHED_COUNT &&
          (!BONUS_MATCH || BONUS_MATCH === isBonusNumberMatched)
        );
      }
    );

    return matchedRank?.[0];
  }

  calculateAllLottoRank(lottoArray) {
    const rankResult = Object.fromEntries(
      Object.keys(PRIZE.RANK).map((rank) => [rank, 0])
    );

    lottoArray.forEach((lotto) => {
      const prizeRank = this.#getPrizeRank(lotto);
      if (!prizeRank) return;
      rankResult[prizeRank]++;
    });

    return rankResult;
  }
}

export default LottoPrizeManager;
