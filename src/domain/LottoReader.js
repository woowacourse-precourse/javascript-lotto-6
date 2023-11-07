import { LOTTO_RULE } from "../constants/BusinessNumber.js";
import LottoRankMaker from "./LottoRankMaker.js";
import LottoStatistics from "./LottoStatistics.js";

class LottoReader extends LottoRankMaker {
  #purchaseAmount;

  constructor(lottoTicket, luckyBonusArray) {
    super(lottoTicket,luckyBonusArray); 
    this.#purchaseAmount = lottoTicket.length * LOTTO_RULE.buyUnit;
  }

  start() {
    const statistics = new LottoStatistics(this.getRankArray(), this.#purchaseAmount);

    return statistics.getResult();
  }
}

export default LottoReader;
