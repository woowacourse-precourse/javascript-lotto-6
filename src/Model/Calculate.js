import WinningNumbers from "./WinningNumbers.js";
import { MATCH, MONEY, NUMBER } from "../util/Constants.js";

class Calculate {
  #results;

  #profitRate;

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

  getProfitRate() {
    return this.#profitRate;
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
      .getNumbers()
      .filter((number) => this.winningNumbers.includes(number));
    return matchedNumbers;
  }

  countBonusNumbers(lotto) {
    const bonusMatch = lotto.getNumbers().includes(this.bonusNumber);
    return bonusMatch;
  }

  countWinnings(matchedNumbers, bonusMatch) {
    if (matchedNumbers.length === MATCH.THREE) {
      this.#results.three += NUMBER.INCREASE;
    } else if (matchedNumbers.length === MATCH.FOUR) {
      this.#results.four += NUMBER.INCREASE;
    } else if (matchedNumbers.length === MATCH.FIVE) {
      if (bonusMatch) {
        this.#results.fiveBonus += NUMBER.INCREASE;
      } else {
        this.#results.five += NUMBER.INCREASE;
      }
    } else if (matchedNumbers.length === MATCH.SIX) {
      this.#results.six += NUMBER.INCREASE;
    }
  }

  calculateProfitRate(purchaseAmount) {
    const profit =
      this.#results.three * MONEY.THREE_MATCH +
      this.#results.four * MONEY.FOUR_MATCH +
      this.#results.five * MONEY.FIVE_MATCH +
      this.#results.fiveBonus * MONEY.FIVE_BONUS_MATCH +
      this.#results.six * MONEY.SIX_MATCH;
    this.#profitRate = (profit / purchaseAmount) * 100;
  }
}

export default Calculate;
