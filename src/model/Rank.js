class Rank {
  #lottos;
  #bonusNumber;
  #winningLotto;
  #rank;

  constructor(lottos, bonusNumber, winningLotto) {
    this.#lottos = lottos.getLottos();
    this.#bonusNumber = bonusNumber.getBonusNumber();
    this.#winningLotto = new Set(winningLotto.getTicketNumbers().map(Number));
  }

  async initRank() {
    this.#rank = Array(5).fill(0);
    this.calculateRank();
  }

  async calculateRank() {
    for (let i = 0; i < this.#lottos.length; i++) {
      const lotto = this.#lottos[i];
      const count = this.compareWinningLotto(lotto);
      const rank = this.setRank(count, lotto);
      if (rank) {
        this.#rank[rank - 1] += 1;
      }
    }
  }

  compareWinningLotto(lotto) {
    return lotto.filter((number) => this.#winningLotto.has(number)).length;
  }

  setRank(count, lotto) {
    switch (count) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return lotto.includes(this.#bonusNumber) ? 2 : 3;
      case 6:
        return 1;
      default:
        return null;
    }
  }

  getRank() {
    return this.#rank;
  }
}

export default Rank;
