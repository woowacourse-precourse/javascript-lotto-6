import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import WORD from "./lib/constants/word";
import { RANK_REWARD } from "./lib/constants/rank";

class User {
  lottoList;

  #rank;

  #payment;

  constructor(userLottoQuanitiy) {
    this.lottoList = this.#generateLotto(userLottoQuanitiy);
    this.#rank = {
      fifthRank: 0,
      fourthRank: 0,
      thirdRank: 0,
      secondRank: 0,
      firstRank: 0,
    };
    this.#payment = userLottoQuanitiy * 1000;
  }

  #generateLotto(userLottoQuanitiy) {
    const lottoList = this.createLottoList(userLottoQuanitiy);
    return lottoList;
  }

  createLottoList(userLottoQuanitiy) {
    let lottoList = [];

    for (let i = 0; i < userLottoQuanitiy; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(
        WORD.MINNUMBER,
        WORD.MAXNUMBER,
        WORD.PICKNUMBER
      ).sort((a, b) => a - b);

      const lotto = new Lotto(randomNumber);
      lottoList.push(lotto);
    }

    return lottoList;
  }

  getLotto() {
    return this.lottoList;
  }

  getRank(lottoNumber, bonusNumber) {
    this.lottoList.forEach((lotto) => {
      const rank = lotto.raffleNumber(lottoNumber, bonusNumber);
      if (rank === WORD.NOTING) return;
      this.#rank[rank] += 1;
    });
  }

  printStatisticList() {
    return Object.values(this.#rank);
  }

  calculateProfit() {
    return Object.entries(this.#rank).reduce(
      (acc, [rank, count]) => acc + RANK_REWARD[rank.toUpperCase()] * count,
      0
    );
  }

  calculateProfitRate() {
    const profitRate = (this.calculateProfit() / this.#payment) * 100;
    return profitRate.toFixed(1);
  }
}

export default User;
