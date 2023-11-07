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
    const prizeData = this.#getPrizeData({ matchCount, matchBonus });

    return new Prize({
      winningPrize: prizeData?.winningPrize || this.#losePrize,
      status: prizeData?.status || this.#losePrize,
    });
  }

  static #getPrizeData({ matchCount, matchBonus }) {
    if (matchCount === Prize.#matchFive && matchBonus) {
      return PRIZE.matchFiveAndBonus;
    }

    return PRIZE[matchCount];
  }
}

export default Prize;
