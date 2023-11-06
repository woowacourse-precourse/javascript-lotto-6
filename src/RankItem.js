class RankItem {
  #ranking;
  #standard;
  #price;
  #winningAmount;

  constructor(ranking, standard, price) {
    this.#ranking = ranking;
    this.#standard = standard;
    this.#price = price;
    this.#winningAmount = 0;
  }

  #meetStandard(count, hasBonus) {
    const { numbers, bonus } = this.#standard;

    if (numbers === count && bonus === hasBonus) {
      return true;
    }
  }

  win(count, hasBonus) {
    if (this.#meetStandard(count, hasBonus)) {
      this.#winningAmount += 1;
    }
  }
}

export default RankItem;
