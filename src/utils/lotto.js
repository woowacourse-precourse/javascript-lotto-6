import { Random } from "@woowacourse/mission-utils";
import LOTTO from "../constant/lottoData.js";
import Lotto from "../class/Lotto.js";

export const paymentToLottoCount = (payment) => {
  return payment / LOTTO.COST;
};

export const generateLottos = (lottoCount) => {
  const lottos = [];

  Array.from({ length: lottoCount }).map((_) => {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto.sort((a, b) => a - b);
    lottos.push(new Lotto(lotto));
  });

  return lottos;
};

export const returnRateCalculate = (result, payment) => {
  let winnnings = 0;
  for (const rank in result) {
    winnnings += result[rank].matched * result[rank].prize;
  }
  return ((winnnings / payment) * 100).toFixed(1);
};

export const matchRank = (result, lottoMatched, bonusMatched) => {
  for (const rank in result) {
    if (rank === "third" || rank === "second") {
      if (
        result[rank].count === lottoMatched &&
        result[rank].bonus === bonusMatched
      ) {
        result[rank].matched++;
      }
    } else {
      if (result[rank].count === lottoMatched) {
        result[rank].matched++;
      }
    }
  }
};
