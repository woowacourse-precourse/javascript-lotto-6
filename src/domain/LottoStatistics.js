import { LOTTO_RANK, LOTTO_STASTICS } from "../constants/BusinessNumber.js";
import { getEarningRate } from "../util/EarningRate.js";


class LottoStatistics {
  #rankingStatusBoard = {
    [LOTTO_RANK.theFirst] : 0,
    [LOTTO_RANK.theSecond] : 0,
    [LOTTO_RANK.theThird] : 0,
    [LOTTO_RANK.theFourth] : 0,
    [LOTTO_RANK.theFifth] : 0,
  };

  #prizeArray = [
    LOTTO_STASTICS.firstPrize,
    LOTTO_STASTICS.secondPrize,
    LOTTO_STASTICS.thirdPrize,
    LOTTO_STASTICS.fourthPrize,
    LOTTO_STASTICS.fifthPrize
  ];

  #rankArray = [];

  #purchaseAmount = 0;

  constructor(rankArray, purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#rankArray = rankArray;
    this.#rankingUpdate();
  }

  #rankingUpdate() {
    this.#rankArray.forEach((rank) => {
      this.#rankingStatusBoard[rank] += 1;
    })
  }

  #getFinalAmount() {
    const finalAmount = this.#prizeArray.reduce((acc,cur,index) => {
      return acc + (cur * this.#rankingStatusBoard[index + 1]);
    }, 0);

    return finalAmount;
  }

  #getProfitRate() {
    return getEarningRate(this.#purchaseAmount, this.#getFinalAmount());
  }

  getResult() {
    
    return [
      this.#rankingStatusBoard[LOTTO_RANK.theFifth],
      this.#rankingStatusBoard[LOTTO_RANK.theFourth],
      this.#rankingStatusBoard[LOTTO_RANK.theThird],
      this.#rankingStatusBoard[LOTTO_RANK.theSecond],
      this.#rankingStatusBoard[LOTTO_RANK.theFirst],
      this.#getProfitRate()
    ];
    
    /*
    const earningRate = getEarningRate(this.#purchaseAmount, this.getFinalAmount());

    return [
      `3개 일치 (5,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theFifth]}개`,
      `4개 일치 (50,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theFourth]}개`,
      `5개 일치 (1,500,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theThird]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theSecond]}개`,
      `6개 일치 (2,000,000,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theFirst]}개`,
      `총 수익률은 ${earningRate}%입니다.`
    ];*/

  }  
}

export default LottoStatistics;

