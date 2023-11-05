export default class LottoResult {
  constructor(winningNumbers, bonusNumber, tickets) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.tickets = tickets;
    this.result = {
      3: { count: 0, prize: 5000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 1500000 },
      '5+1': { count: 0, prize: 30000000 },
      6: { count: 0, prize: 2000000000 },
    };
  }

  calculateResults() {
    this.tickets.forEach((ticket) => {
      const matchCount = this.getMatchCount(ticket);
      if (matchCount === 5 && ticket.numbers.includes(this.bonusNumber)) {
        this.result['5+1'].count += 1;
      } else if (this.result[matchCount]) {
        this.result[matchCount].count += 1;
      }
    });
  }

  getMatchCount(ticket) {
    return ticket.numbers.filter((number) => this.winningNumbers.includes(number)).length;
  }

  getFormattedResultString() {
    const resultStrings = Object.entries(this.result).map(([match, data]) => {
      const matchText = match === '5+1' ? '5개 일치, 보너스 볼 일치' : `${match}개 일치`;
      return `${matchText} (${data.prize.toLocaleString()}원) - ${data.count}개`;
    });
    return resultStrings;
  }

  calculateProfitRate() {
    const totalSpent = this.tickets.length * 1000;
    const totalPrize = Object.values(this.result).reduce(
      (acc, cur) => acc + cur.count * cur.prize,
      0,
    );
    const profitRate = (totalPrize / totalSpent) * 100;
    return Number(profitRate.toFixed(2));
  }
}
