
class LottoStatistics {
  #rankingStatusBoard = {
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
  }

  #rankingArray = [];

  #purchaseAmount;

  constructor(rankingArray, purchaseAmount) {
    this.#rankingArray = rankingArray;
    this.#rankingUpdate();
    this.#purchaseAmount = purchaseAmount;

  }

  #rankingUpdate() {
    this.#rankingArray.forEach((ranking) => {
      this.#rankingStatusBoard[ranking] += 1;
    })
  }

  getResult() {
    return [
      `3개 일치 (5,000원) - ${this.#rankingStatusBoard[5]}개`,
      `4개 일치 (50,000원) - ${this.#rankingStatusBoard[4]}개`,
      `5개 일치 (1,500,000원) - ${this.#rankingStatusBoard[3]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#rankingStatusBoard[2]}개`,
      `6개 일치 (2,000,000,000원) - ${this.#rankingStatusBoard[1]}개`
    ];
  }

  #rateOfReturn() {
    
    
  }

  
}

export default LottoStatistics;