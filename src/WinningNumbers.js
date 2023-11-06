class Winning {
  #winningNumbers;
  #bonusNumber;
  #lottos;
  #rank = [0, 0, 0, 0, 0];
  #rateOfReturn = 0;
  
  constructor(winningNumbers, bonusNumber, lottos) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#lottos = lottos.getLottos();
  }

  compareLottoNumbers() {
    this.#lottos.forEach((lotto) => {
      const winningType = lotto.filter(number => this.#winningNumbers.includes(number)).length;
      if (winningType === 3) this.#rank[4] += 1;
      if (winningType === 4) this.#rank[3] += 1;
      if (winningType === 5) {
        if (lotto.includes(this.#bonusNumber)) this.#rank[1] += 1;
        this.#rank[2] += 1;
      }
      if (winningType === 6) this.#rank[0] += 1;
    })
  }

  calculateRateOfReturn(purchaseAmount) {
    const money = [2000000000, 30000000, 1500000, 50000, 5000];
    let result = 0;
    this.#rank.forEach((count, index) => {
      result += money[index] * count;
    })
    this.#rateOfReturn = result / purchaseAmount * 100;
    return this.#rateOfReturn;
  }

  getRank() {
    return this.#rank;
  }
  
}

export default Winning;