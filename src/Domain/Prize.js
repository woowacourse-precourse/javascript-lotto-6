import PRIZE from '../constants/prize.js';

class Prize {
  static #losePrize = 0;

  static #matchFive = 5;

  winningPrize;

  status;

  constructor({ winningPrize, status }) {
    this.winningPrize = winningPrize;
    this.status = status;
  }

  static getPrize({ matchCount, matchBonus }) {
    const winningPrize = this.#checkWinningPrize({ matchCount, matchBonus });
    const status = this.#checkStatus({ matchCount, matchBonus });

    return new Prize({
      winningPrize,
      status,
    });
  }

  static #checkWinningPrize({ matchCount, matchBonus }) {
    if (matchCount === this.#matchFive && matchBonus) {
      return PRIZE.matchFiveAndBonus.prize;
    }

    return PRIZE[matchCount]?.prize || this.#losePrize;
  }

  static #checkStatus({ matchCount, matchBonus }) {
    if (matchCount === this.#matchFive && matchBonus) {
      return PRIZE.matchFiveAndBonus.status;
    }

    return PRIZE[matchCount]?.status || this.#losePrize;
  }
}

export default Prize;
