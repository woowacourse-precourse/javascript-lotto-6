
import LottoRankMaker from "./LottoRankMaker.js";
import LottoStatistics from "./LottoStatistics.js";


class LottoReader extends LottoRankMaker{
  #lottoTicket = [];
    
  #luckyBonusArray = [];

  #rankingArray = [];
  
  #purchaseAmount = 0;
  // ( [로또티켓 2차원배열] [당첨배열+보너스배열] )  로또티켓으로 구입금액 유츄가능
  constructor(lottoTicket, luckyBonusArray) {
    super(lottoTicket,luckyBonusArray);
    this.#lottoTicket = lottoTicket;
    this.#luckyBonusArray = luckyBonusArray; 
    this.#purchaseAmount = lottoTicket.length * 1000;
    
  }

  play() {
    const a = this.getRankArray();
    console.log(a);
  }
}

const ticket = [
  [1,2,3,4,7,6],
  [1,2,3,4,7,6],
  [1,2,3,4,7,6],
  [1,2,3,4,7,6]
]

const answer = [1,2,3,4,5,6,7]

const a = new LottoReader(ticket, answer);
a.play();