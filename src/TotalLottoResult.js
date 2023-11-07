import { MATCHED_RESULT } from "./LottoResult.js";

export const MATCHED_RESULT_TO_PRICE = {
  [MATCHED_RESULT.miss]: 0,
  [MATCHED_RESULT.three]: 5000,
  [MATCHED_RESULT.four]: 50000,
  [MATCHED_RESULT.five]: 1500000,
  [MATCHED_RESULT.fiveBonus]: 30000000,
  [MATCHED_RESULT.six]: 2000000000,
};

class TotalLottoResult {
  #result;

  constructor(...lottoResults) {
    this.#result = lottoResults.reduce(
      (totalResult, lottoResult) => {
        const matchedResult = lottoResult.getResult();
        return {
          ...totalResult,
          [matchedResult]: totalResult[matchedResult] + 1,
        };
      },
      {
        [MATCHED_RESULT.miss]: 0,
        [MATCHED_RESULT.three]: 0,
        [MATCHED_RESULT.four]: 0,
        [MATCHED_RESULT.five]: 0,
        [MATCHED_RESULT.fiveBonus]: 0,
        [MATCHED_RESULT.six]: 0,
      },
    );
  }

  getResult() {
    return this.#result;
  }

  getWinningAmount() {
    return Object.keys(this.#result).reduce(
      (acc, key) => acc + this.#result[key] * MATCHED_RESULT_TO_PRICE[key],
      0,
    );
  }
}

export default TotalLottoResult;
