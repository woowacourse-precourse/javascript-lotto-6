import PRIZE from "./constant/PRIZE.js";

class LottoPrizeManager {
  #rankResult;

  constructor() {
    this.#initializeRankResult();
  }

  #initializeRankResult() {
    this.#rankResult = Object.fromEntries(
      Object.keys(PRIZE.RANK).map((rank) => [rank, 0])
    );
  }

  #filterMatchingNumbers({ winningNumbers, bonusNumber, numberArray }) {
    const matchedNumber = numberArray.filter((number) =>
      winningNumbers.includes(number)
    );
    const isBonusNumberMatched = numberArray.includes(bonusNumber);

    return { matchedNumber, isBonusNumberMatched };
  }

  #getPrizeRank({ winningNumbers, bonusNumber, numberArray }) {
    const { matchedNumber, isBonusNumberMatched } = this.#filterMatchingNumbers(
      { winningNumbers, bonusNumber, numberArray }
    );

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

  calculateAllLottoRank({ winningNumbers, bonusNumber, lottoArray }) {
    lottoArray.forEach((lotto) => {
      const prizeRank = this.#getPrizeRank({
        winningNumbers,
        bonusNumber,
        numberArray: lotto,
      });
      if (!prizeRank) return;
      this.#rankResult[prizeRank]++;
    });

    return this.#rankResult;
  }

  static calculateProfitRate({ rankResult, totalMoney }) {
    const prizeMoney = Object.keys(PRIZE.RANK).reduce((acc, rankKey) => {
      const { MONEY } = PRIZE.RANK[rankKey];
      return acc + rankResult[rankKey] * MONEY;
    }, 0);

    const profitRate = (prizeMoney / totalMoney) * 100;

    return profitRate.toFixed(1);
  }
}

export default LottoPrizeManager;
