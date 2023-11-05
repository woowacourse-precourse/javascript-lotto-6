import { LOTTO_PRICE } from "./utils/lottoConstants.js";

const RANKS = {
  6: "1등",
  5.5: "2등",
  5: "3등",
  4: "4등",
  3: "5등",
};

const PRIZE_MONEY = {
  "1등": 2000000000,
  "2등": 30000000,
  "3등": 1500000,
  "4등": 50000,
  "5등": 5000,
};

class LottoResult {
  constructor() {
    this.winningCounts = {
      "1등": 0,
      "2등": 0,
      "3등": 0,
      "4등": 0,
      "5등": 0,
    };
    this.rateOfReturn = 0;
  }

  getMatchedCount(ticket, winningNumbers, bonusNumber) {
    let matchedCount = ticket.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    if (matchedCount === 5 && ticket.includes(bonusNumber)) {
      matchedCount += 0.5;
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

      if (matchedCount < 3) return;

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
