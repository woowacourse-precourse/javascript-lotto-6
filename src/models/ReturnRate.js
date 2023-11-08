import { LOTTO } from '../utils/constants.js';

class ReturnRate {
  #returnRate;

  constructor(purchaseAmount, lottoTicketResult) {
    this.#calcaulteLottoRate(purchaseAmount, lottoTicketResult);
  }

  #calcaulteLottoRate(purchaseAmount, lottoTicketResult) {
    const totalWinningMoney = this.#calcaulteWinning(lottoTicketResult);
    let returnRate = (totalWinningMoney / purchaseAmount) * 100;
    returnRate = this.#roundRate(returnRate);
    this.#returnRate = returnRate;
  }

  #calcaulteWinning(lottoTicketResult) {
    const winningMoney = [
      LOTTO.FIFTH_PLACE,
      LOTTO.FOURTH_PLACE,
      LOTTO.THIRD_PLACE,
      LOTTO.SECOND_PLACE,
      LOTTO.FIRST_PLACE,
    ];
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
