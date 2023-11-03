import { LOTTO_RANK, LOTTO_STASTICS } from "../constants/BusinessNumber.js";


class LottoStatistics {
  #rankingStatusBoard = {
    [LOTTO_RANK.theFirst] : 0,
    [LOTTO_RANK.theSecond] : 0,
    [LOTTO_RANK.theThird] : 0,
    [LOTTO_RANK.theFourth] : 0,
    [LOTTO_RANK.theFifth] : 0,
  }

  #rankArray = [];

  #purchaseAmount;

  constructor(rankArray, purchaseAmount) {
    this.#rankArray = rankArray;
    this.#rankingUpdate();
    this.#purchaseAmount = purchaseAmount;

  }

  #rankingUpdate() {
    this.#rankArray.forEach((rank) => {
      this.#rankingStatusBoard[rank] += 1;
    })
  }

  getResult() {
    return [
      `3개 일치 (5,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theFifth]}개`,
      `4개 일치 (50,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theFourth]}개`,
      `5개 일치 (1,500,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theThird]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theSecond]}개`,
      `6개 일치 (2,000,000,000원) - ${this.#rankingStatusBoard[LOTTO_RANK.theFirst]}개`,
      `총 수익률은 ${this.getEarningRate()}%입니다.`
    ];
  }
  //0 세자리마다 끊기 기능 추가
  getEarningRate() {
    const firstAmount = this.#purchaseAmount;
    const finalAmount = this.getFinalAmount();
    
    const earningRate = (finalAmount - firstAmount) * 100 / firstAmount;

    if (earningRate < 0) return (earningRate + 100).toFixed(1);
    
    
    return earningRate.toFixed(1)
  }

  getFinalAmount() {
    const prizeArray = [
      LOTTO_STASTICS.firstPrize,
      LOTTO_STASTICS.secondPrize,
      LOTTO_STASTICS.thirdPrize,
      LOTTO_STASTICS.fourthPrize,
      LOTTO_STASTICS.fifthPrize
    ];
    
    const finalAmount = prizeArray.reduce((acc,cur,index) => {
      return acc + (cur * this.#rankingStatusBoard[index + 1]);
    }, 0);

    return finalAmount;
  }

  
}

export default LottoStatistics;