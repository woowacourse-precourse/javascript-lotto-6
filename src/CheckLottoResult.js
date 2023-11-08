import { RANK } from "./constant.js";

class CheckLottoResult {
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
    lottos.forEach(lotto => {
      this.setRank(lotto.getRank(userLotto.getNumbers(), bonusNumber));
    });
  }

  setRank(rank) {
    if (rank === undefined) return;
    this.rankCount.set(rank, this.rankCount.get(rank) + 1);
  }
}

export default CheckLottoResult;