import WinningNumbers from "./WinningNumbers.js";

class CalculateWinnings {
  #results;

  constructor(lottos, inputWinningNumbers, inputBonusNumbers) {
    const winningNumber = new WinningNumbers(
      inputWinningNumbers,
      inputBonusNumbers
    );
    this.lottoTickets = lottos.getLottoTickets();
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

  caculate() {
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
}

export default CalculateWinnings;
