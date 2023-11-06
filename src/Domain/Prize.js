class Prize {
  static #matchSix = 2000000000;

  static #matchFiveAndBonus = 30000000;

  static #matchFive = 1500000;

  static #matchFour = 50000;

  static #matchThree = 5000;

  static #lose = 0;

  winningPrize;

  constructor(winningPrize) {
    this.winningPrize = winningPrize;
  }

  static getPrize({ matchCount, matchBonus }) {
    const winningPrizes = {
      6: Prize.#matchSix,
      5: matchBonus ? Prize.#matchFiveAndBonus : Prize.#matchFive,
      4: Prize.#matchFour,
      3: Prize.#matchThree,
    };

    return new Prize(winningPrizes[matchCount] || Prize.#lose);
  }
}

export default Prize;
