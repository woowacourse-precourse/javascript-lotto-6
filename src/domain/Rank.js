import NUMBER from "../static/Number";

class Rank {
  #lottos;
  #rankStatic;

  constructor(lottos) {
    this.#rankStatic = Array(NUMBER.lottoRank).fill(0);
    this.#lottos = lottos;
  }

  #getRank(lotto, winningNumber, bonusNumber) {
    const sameNumberCount = this.#getSameNumberCount(lotto, winningNumber);
    if (sameNumberCount === 3) return 5;
    if (sameNumberCount === 4) return 4;
    if (sameNumberCount === 5 && lotto.includes(bonusNumber)) return 2;
    if (sameNumberCount === 5) return 3;
    if (sameNumberCount === 6) return 1;
  }

  getRankStatistic(winningNumber, bonusNumber) {
    this.#lottos.forEach((lotto) => {
      const rank = this.#getRank(lotto, winningNumber, bonusNumber);
      if (rank) this.#rankStatic[rank - 1] += 1;
    });
    return this.#rankStatic;
  }

  #getSameNumberCount(lotto, winningNumber) {
    return winningNumber.map(Number).filter((number) => lotto.includes(number))
      .length;
  }
}

export default Rank;
