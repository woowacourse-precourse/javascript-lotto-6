import { LOTTO_RULE } from "../constants/BusinessNumber.js";
import LottoRankMaker from "./LottoRankMaker.js";
import LottoStatistics from "./LottoStatistics.js";


class LottoReader extends LottoRankMaker {
  #purchaseAmount = 0;

  constructor(lottoTicket, luckyBonusArray) {
    super(lottoTicket,luckyBonusArray); 
    this.#purchaseAmount = lottoTicket.length * LOTTO_RULE.buyUnit;
  }

  start() {
    const rankArray = this.getRankArray();

    const statistics = new LottoStatistics(rankArray, this.#purchaseAmount);

    return statistics.getResult();
  }
}

export default LottoReader;
