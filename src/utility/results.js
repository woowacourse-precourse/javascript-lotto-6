import { Console } from "@woowacourse/mission-utils";
import { LOTTO_RESULTS } from "../constants/constants.js";

export const formatAndDisplayResult = async (
  num3,
  num4,
  num5,
  num5WithBonus,
  num6
) => {
  const result = `
3개 일치 (5,000원) - ${num3}개
4개 일치 (50,000원) - ${num4}개
5개 일치 (1,500,000원) - ${num5}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${num5WithBonus}개
6개 일치 (2,000,000,000원) - ${num6}개
  `;

  Console.print("당첨 통계\n---\n" + result);
};

const updateLottoResults = (count, lotto, bonusBall) => {
  if (count === 3) {
    LOTTO_RESULTS.num3++;
  } else if (count === 4) {
    LOTTO_RESULTS.num4++;
  } else if (count === 5) {
    LOTTO_RESULTS.num5++;
  } else if (count === 5 && lotto.includes(bonusBall)) {
    LOTTO_RESULTS.num5WithBonus++;
  } else if (count === 6) {
    LOTTO_RESULTS.num6++;
  }
};

export const findMatchingNums = (
  lottos,
  lottoResults,
  bonusBall,
  totalAmountSpent
) => {
  lottos.map((lotto) => {
    const count = lotto.filter((num) => lottoResults.includes(num)).length;
    updateLottoResults(count, lotto, bonusBall, totalAmountSpent);
  });

  formatAndDisplayResult(
    LOTTO_RESULTS.num3,
    LOTTO_RESULTS.num4,
    LOTTO_RESULTS.num5,
    LOTTO_RESULTS.num5WithBonus,
    LOTTO_RESULTS.num6
  );
};

//
export const calculateProfit = (totalAmountSpent) => {
  const totalPrizeMoney =
    LOTTO_RESULTS.num3 * 5000 +
    LOTTO_RESULTS.num4 * 50000 +
    LOTTO_RESULTS.num5 * 1500000 +
    LOTTO_RESULTS.num5WithBonus * 30000000 +
    LOTTO_RESULTS.num6 * 2000000000;

  const profitRate = totalPrizeMoney / totalAmountSpent;
  return (profitRate * 100).toFixed(1);
};
