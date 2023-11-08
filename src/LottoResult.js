class LottoResult {
  #results;
  #prizes;

  constructor() {
    this.#results = [];
    this.#prizes = new Map();
  }

  checkWinningNumbers(lottoTickets, winningNumbers, bonusNumber) {
    const numbers = winningNumbers.split(',').map(Number);
    lottoTickets.forEach((ticket) => {
      const result = ticket.checkWinning(numbers, bonusNumber);

      this.#results.push({
        numbers: ticket.getNumbers(),
        winCount: result.count,
        hasBonus: result.bonus,
      });

      this.#distributePrize(result);
    });
  }

  #distributePrize(result) {
    const key = this.#getPrizeKey(result);
    this.#prizes.set(key, this.#getPrizeCount(key) + 1);
  }

  #getPrizeCount(key) {
    return this.#prizes.get(key) || 0;
  }

  #getPrizeKey(result) {
    if (result.count === 6) {
      return '6';
    } else if (result.count === 5) {
      return result.bonus ? '5B' : '5';
    }
    return String(result.count);
  }
}

export default LottoResult;
