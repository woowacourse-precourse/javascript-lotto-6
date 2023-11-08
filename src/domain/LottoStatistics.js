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

  #rankArray;

  #purchaseAmount;

  constructor(rankArray, purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#rankArray = rankArray;
    this.#rankingUpdate();
  }

  #rankingUpdate() {
    this.#rankArray.forEach((rank) => {
      this.#rankingStatusBoard[rank] += 1;
    });
  }

  #getFinalAmount() {
    const finalAmount = this.#prizeArray
      .reduce((acc, cur, index) => acc + (cur * this.#rankingStatusBoard[index + 1]), 0);

    return finalAmount;   
  }

  getResult() { 
    return [
      this.#rankingStatusBoard[LOTTO_RANK.theFifth],
      this.#rankingStatusBoard[LOTTO_RANK.theFourth],
      this.#rankingStatusBoard[LOTTO_RANK.theThird],
      this.#rankingStatusBoard[LOTTO_RANK.theSecond],
      this.#rankingStatusBoard[LOTTO_RANK.theFirst],
      getEarningRate(this.#purchaseAmount, this.#getFinalAmount())
    ];
  }  
}

export default LottoStatistics;
