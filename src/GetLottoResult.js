import { RANK } from "./libs/Constant.js";

class GetLottoResult {
  rankCount;

  constructor() {
    this.rankCount = new Map([
      [RANK.FIFTH.NAME, 0],
      [RANK.FOURTH.NAME, 0],
      [RANK.THIRD.NAME, 0],
      [RANK.SECOND.NAME, 0],
      [RANK.FIRST.NAME, 0],
    ]);
  }

  checkResult(lottos, userLotto, bonusNumber) {
    lottos.forEach((lotto) => {
      this.setRank(lotto.getRank(userLotto.getNumbers(), bonusNumber));
    });
  }

  setRank(rank) {
    if (rank === undefined) return;
    this.rankCount.set(rank, this.rankCount.get(rank) + 1);
  }

  returnRate(inputMoney) {
    let profit = 0;
    this.rankCount.forEach((count, rank) => {
      profit += count * RANK[rank].PRIZE;
    });
    const rate = (profit / inputMoney) * 100;
    return this.round(rate);
  }

  round(num) {
    return (+(Math.round(num + `e+1`) + `e-1`)).toFixed(1);
  }
}

export default GetLottoResult;
