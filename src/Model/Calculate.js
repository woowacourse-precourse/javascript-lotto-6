import WinningNumbers from "./WinningNumbers.js";

class Calculate {
  #results;

  #profitRate;

  constructor(lottos, inputWinningNumbers, inputBonusNumbers) {
    const winningNumber = new WinningNumbers(
      inputWinningNumbers,
      inputBonusNumbers
    );
    this.lottos.this.lottoTickets = lottos.getLottoTickets();
    this.winningNumbers = winningNumber.getWinningNumbers();
    this.bonusNumber = winningNumber.getBonus();

    this.#results = {
      three: 0,
      four: 0,
      five: 0,
      fiveBonus: 0,
      six: 0,
    };
  }

  getResults() {
    return this.#results;
  }

  caculateResults() {
    this.lottoTickets.forEach((lottoTicket) => {
      const matchedNumbers = this.countMatchNumbers(lottoTicket);
      const bonusMatch = this.countBonusNumbers(lottoTicket);
      this.countWinnings(matchedNumbers, bonusMatch);
    });
  }

  countMatchNumbers(lotto) {
    const matchedNumbers = lotto
      .getNumber()
      .filter((number) => this.winningNumbers.includes(number));
    return matchedNumbers;
  }

  countBonusNumbers(lotto) {
    const bonusMatch = lotto.getNumber().includes(this.bonusNumber);
    return bonusMatch;
  }

  countWinnings(matchedNumbers, bonusMatch) {
    if (matchedNumbers.length === 3) {
      this.#results.three += 1;
    } else if (matchedNumbers.length === 4) {
      this.#results.four += 1;
    } else if (matchedNumbers.length === 5) {
      if (bonusMatch) {
        this.#results.fiveBonus += 1;
      } else {
        this.#results.five += 1;
      }
    } else if (matchedNumbers.length === 6) {
      this.#results.six += 1;
    }
  }

  calculateProfitRate(purchaseAmount) {
    const profit =
      this.#results.three * 5000 +
      this.#results.four * 50000 +
      this.#results.five * 1500000 +
      this.#results.fiveBonus * 30000000 +
      this.#results.six * 2000000000;
    this.#profitRate = (profit / purchaseAmount) * 100;
  }
}

export default Calculate;
