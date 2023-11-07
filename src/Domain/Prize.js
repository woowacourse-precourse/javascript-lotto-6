import PRIZE from '../constants/prize.js';

class Prize {
  static prizeMap = new Map([
    [3, PRIZE[3]],
    [4, PRIZE[4]],
    [5, PRIZE[5]],
    ['matchFiveAndBonus', PRIZE.matchFiveAndBonus],
    [6, PRIZE[6]],
  ]);

  static #losePrize = 0;

  static #matchFive = 5;

  static #matchFiveAndBonus = 'matchFiveAndBonus';

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
      return Prize.prizeMap.get(this.#matchFiveAndBonus);
    }

    return Prize.prizeMap.get(matchCount);
  }
}

export default Prize;
