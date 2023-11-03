
import LottoRankMaker from "./LottoRankMaker.js";
import LottoStatistics from "./LottoStatistics.js";


class LottoController {
  #lottoTicket = [];
    
  #luckyBonusArray = [];

  #rankingArray = [];
  
  #purchaseAmount = 0;
  // ( [로또티켓 2차원배열] [당첨배열+보너스배열] )  로또티켓으로 구입금액 유츄가능
  constructor(lottoTicket, luckyBonusArray) {
    this.#lottoTicket = lottoTicket;
    this.#luckyBonusArray = luckyBonusArray; 
    this.#purchaseAmount = lottoTicket.length * 1000;
    this.#ranking();
  }

  #ranking() {
    this.#lottoTicket.forEach((lottoArray) => {
      const rank = new LottoRanker(lottoArray, this.#luckyBonusArray);
      console.log(lottoArray);

      this.#rankingArray.push(rank.result());
      console.log(this.#rankingArray);
    })
    
  }

  show() {
    return this.#rankingArray;
  }

  result() {
    const stastics = new LottoStatistics(this.#rankingArray, this.#purchaseAmount);

    return stastics.getResult();
  }
  
}

const ticket = [
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6]
]

const answer = [1,2,3,4,5,6,7]

const a = new LottoController(ticket, answer);
console.log(a.show());