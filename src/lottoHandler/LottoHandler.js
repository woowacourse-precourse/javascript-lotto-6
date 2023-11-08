import { Random } from "@woowacourse/mission-utils";
import { lotto, lottoCount, lottoPrize } from "../constants/constants.js";

import Lotto from "../domain/Lotto.js";

class LottoHandler {
  getLottoCount(cash) {
    const count = cash / lotto.PRICE;
    return count;
  }

  createLotto() {
    const array = Random.pickUniqueNumbersInRange(
      lotto.MIN_RANGE,
      lotto.MAX_RANGE,
      lotto.LENGTH
    );
    return new Lotto(array.sort((a, b) => a - b));
  }

  getLottoResult(lottoArray, winningLotto) {
    const winningCount = lottoArray.map((lotto) =>
      lotto.compareLotto(winningLotto)
    );
    return winningCount;
  }

  getRanking(countArray) {
    const rank = {
      FIFTH: 0,
      FORTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };
    countArray.forEach((count) => {
      const rankKey = Object.keys(rank).find(
        (key) => count === lottoCount[key]
      );
      if (rankKey) {
        rank[rankKey]++;
      }
    });
    return rank;
  }

  getPrize(ranking) {
    let prize = 0;
    const rankKey = Object.keys(ranking);

    rankKey.forEach((key) => {
      prize += ranking[key] * lottoPrize[key];
    });
    return prize;
  }
}

export default LottoHandler;
