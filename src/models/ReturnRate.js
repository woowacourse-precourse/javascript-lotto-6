class ReturnRate {
  #returnRate;

  constructor(lottoCount, lottoTicketResult) {
    this.#calcaulteLottoRate(lottoCount, lottoTicketResult);
  }

  #calcaulteLottoRate(lottoCount, lottoTicketResult) {
    const totalWinningMoney = this.#calcaulteWinning(lottoTicketResult);
    let returnRate = (totalWinningMoney / (lottoCount * 1000)) * 100;
    returnRate = this.#roundRate(returnRate);
    this.#returnRate = returnRate;
  }

  #calcaulteWinning(lottoTicketResult) {
    const winningMoney = [2000000000, 30000000, 1500000, 50000, 5000];
    let totalWinningMoney = 0;

    lottoTicketResult.forEach((rankCount, rank) => {
      totalWinningMoney += winningMoney[rank] * rankCount;
    });
    return totalWinningMoney;
  }

  #roundRate(rate) {
    return Math.round(rate * 10) / 10;
  }

  getReturnRate() {
    return this.#returnRate;
  }
}

export default ReturnRate;
