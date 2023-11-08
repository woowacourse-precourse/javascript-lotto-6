import { EVERYTHING_OK } from './constants/lottoGame.js';

class RankItem {
  #ranking;
  #standard;
  #prize;
  #winningAmount;

  constructor(ranking, standard, prize) {
    this.#ranking = ranking;
    this.#standard = standard;
    this.#prize = prize;
    this.#winningAmount = 0;
  }

  #meetStandard(count, hasBonus) {
    const { numbers, bonus } = this.#standard;

    if (bonus === EVERYTHING_OK) {
      return numbers === count;
    }

    return numbers === count && bonus === hasBonus;
  }

  win(count, hasBonus) {
    if (this.#meetStandard(count, hasBonus)) {
      this.#winningAmount += 1;
    }
  }

  getWinnings() {
    return this.#prize * this.#winningAmount;
  }

  get() {
    return [this.#standard, this.#prize, this.#winningAmount];
  }
}

export default RankItem;
