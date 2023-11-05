import {
  BONUS_MATCH_VALUE,
  LOTTO_PRICE,
  MIN_MATCH_COUNT,
  PRIZE_MONEY,
  RANKS,
} from "./utils/lottoConstants.js";

class LottoResult {
  constructor() {
    this.winningCounts = Object.fromEntries(
      Object.values(RANKS).map((rank) => [rank, 0])
    );
    this.rateOfReturn = 0;
  }

  getMatchedCount(ticket, winningNumbers, bonusNumber) {
    let matchedCount = ticket.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    if (matchedCount === 5 && ticket.includes(bonusNumber)) {
      matchedCount += BONUS_MATCH_VALUE;
    }

    return matchedCount;
  }

  updateWinningCounts(lottoTickets, winningNumbers, bonusNumber) {
    lottoTickets.forEach((ticket) => {
      const matchedCount = this.getMatchedCount(
        ticket,
        winningNumbers,
        bonusNumber
      );

      if (matchedCount < MIN_MATCH_COUNT) return;

      const rank = RANKS[matchedCount];
      this.winningCounts[rank] += 1;
    });
  }

  calculateTotalReward() {
    const ranks = Object.keys(this.winningCounts);
    const totalReward = ranks.reduce((acc, rank) => {
      const reward = this.winningCounts[rank] * PRIZE_MONEY[rank];
      return acc + reward;
    }, 0);

    return totalReward;
  }

  calculateRateOfReturn(money, totalReward) {
    const rateOfReturn = (totalReward / money) * 100;
    this.rateOfReturn = rateOfReturn.toFixed(1);
  }

  calculateFinalResult(lottoTickets, winningNumbers, bonusNumber) {
    this.updateWinningCounts(lottoTickets, winningNumbers, bonusNumber);

    const totalReward = this.calculateTotalReward();

    const boughtMoney = lottoTickets.length * LOTTO_PRICE;
    this.calculateRateOfReturn(boughtMoney, totalReward);

    return {
      winningCounts: this.winningCounts,
      rateOfReturn: this.rateOfReturn,
    };
  }
}

export default LottoResult;
