import { LOTTO_RULE } from "../constants/BusinessNumber.js";
import LottoRankMaker from "./LottoRankMaker.js";
import LottoStatistics from "./LottoStatistics.js";


class LottoReader extends LottoRankMaker {
  #purchaseAmount = 0;

  // ( [로또티켓 2차원배열] [당첨배열+보너스배열] )  로또티켓으로 구입금액 유츄가능
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
/*
const ticket = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45]
]

const ticket2 = [
  [11,12,13,14,15,16]
]

const answer = [1,2,3,4,5,6,7]

const a = new LottoReader(ticket, answer);
console.log(a.start());*/