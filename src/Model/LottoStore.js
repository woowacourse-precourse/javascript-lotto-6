import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import {
  LOTTO,
  LOTTO_MATCH_RESULT,
  LOTTO_WINNING_AMOUNT,
  MATH_FACTORS,
  PURCHASE_AMOUNT,
  WINNING_CONDITIONS
} from "../constants/lotto.js";
import { MESSAGE_FACTOR } from "../constants/message.js";

class LottoStore {
  #lottos = [];

  #lottoMatchResult = {
    fifthPlace: LOTTO_MATCH_RESULT.initialResultValue,
    fourthPlace: LOTTO_MATCH_RESULT.initialResultValue,
    thirdPlace: LOTTO_MATCH_RESULT.initialResultValue,
    secondPlace: LOTTO_MATCH_RESULT.initialResultValue,
    firstPlace: LOTTO_MATCH_RESULT.initialResultValue,
    returnRate: LOTTO_MATCH_RESULT.initialResultValue,
  };

  constructor(purchaseQuantity) {
    const randomLottoNumbers = this.#createRandomLottoNumbers(purchaseQuantity);
    this.#createLottos(randomLottoNumbers);
  }

  #createRandomLottoNumbers(purchaseQuantity) {
    const randomLottoNumbers = Array.from({ length: purchaseQuantity }, () =>
      this.#pickRandomNumbers()
    );

    return randomLottoNumbers;
  }

  #pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO.minValue, LOTTO.maxValue, LOTTO.numberLength);
  }

  #createLottos(randomLottoNumbers) {
    this.#lottos = randomLottoNumbers.map((randomNumbers) => new Lotto(randomNumbers));
  }

  getLottoNumbers() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }

  getLottoMatchResult({ lottoWinningNumbers, bonusNumber }) {
    const matchCounts = this.#matchLottoNumbers({ lottoWinningNumbers, bonusNumber });
    this.#calculateMatchResult(matchCounts);
    this.#calculateReturnRate();

    return this.#lottoMatchResult;
  }

  #matchLottoNumbers({ lottoWinningNumbers, bonusNumber }) {
    const matchCounts = this.#lottos.map((lotto) =>
      lotto.matchNumbers({ lottoWinningNumbers, bonusNumber })
    );

    return matchCounts;
  }

  #calculateMatchResult(matchCounts) {
    matchCounts.map((matchCount) => {
      this.#compareMatchResult(matchCount);
    });
  }

  #compareMatchResult({ lottoWinningNumbersMatchCount, bonusNumberMatchCount }) {
    for (const [place, conditions] of Object.entries(WINNING_CONDITIONS)) {
      if (lottoWinningNumbersMatchCount === conditions.lottoWinningNumbersMatchCount &&
        conditions.bonusNumberMatchCount.includes(bonusNumberMatchCount)) {
        this.#lottoMatchResult[place]++;
      }
    }
  }
  
  #calculateReturnRate() {
    const totalWinningAmount = this.#calculateTotalWinningAmount();
    const returnRate = (totalWinningAmount / (this.#lottos.length * PURCHASE_AMOUNT.unit)) * MATH_FACTORS.percentage;
    const roundedReturnRate = Math.round((returnRate + Number.EPSILON) * MATH_FACTORS.roundingDigit) / MATH_FACTORS.roundingDigit;
    this.#lottoMatchResult.returnRate = roundedReturnRate;
  }

  #calculateTotalWinningAmount() {
    return Object.keys(this.#lottoMatchResult)
      .filter((place) => place !== MESSAGE_FACTOR.returnRate)
      .reduce((acc, place) => {
        return acc + this.#lottoMatchResult[place] * LOTTO_WINNING_AMOUNT[place];
      }, MATH_FACTORS.initialValue);
  }
}

export default LottoStore;
