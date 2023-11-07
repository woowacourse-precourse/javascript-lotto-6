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

    return numbers === count && bonus === hasBonus;
  }

  win(count, hasBonus) {
    if (this.#meetStandard(count, hasBonus)) {
      this.#winningAmount += 1;
    }
  }
}

export default RankItem;
