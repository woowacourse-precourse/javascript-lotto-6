import LottoTicket from '../Model/LottoTicket.js';

const WIN_PRICES = {
  3: 5000, 4: 50000, 5: 1500000, bonus: 30000000, 6: 2000000000,
};

class ProfitCalculator {
  #lottoTicket;
  constructor() {
    this.#lottoTicket = LottoTicket.getInstance();
  }

  calculateTotalIncome(numOfWinningNumMatches) {
    const totalIncome = Object.entries(numOfWinningNumMatches).reduce((acc, [matchesCount, count]) => acc + (WIN_PRICES[matchesCount] * count), 0);
    return totalIncome;
  }

  calculateEarningRate(totalIncome) {
    const purchasePrice = this.#lottoTicket.ticket.length * 1000;
    const earningRate = Math.round((totalIncome / purchasePrice) * 1000) / 10;
    return earningRate;
  }
}

export default ProfitCalculator;
