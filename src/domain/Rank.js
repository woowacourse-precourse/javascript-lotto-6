class Rank {
  #rankStatic;

  constructor() {
    this.#rankStatic = Array(5).fill(0);
  }

  getRank(props) {
    const sameNumberCount = this.getSameNumberCount(props.winningNumber);
    if (sameNumberCount === 3) return 5;
    if (sameNumberCount === 4) return 4;
    if (sameNumberCount === 5 && props.lotto.includes(bonusNumber)) return 2;
    if (sameNumberCount === 5) return 3;
    if (sameNumberCount === 6) return 1;
  }

  getRankStatistic(props) {
    props.lottos.forEach((lotto) => {
      const rank = lotto.getRank(props.winningNumber, bonusNumber);
      if (rank) this.#rankStatic[rank - 1] += 1;
    });
    return this.#rankStatic;
  }

  getSameNumberCount(props) {
    return props.winningNumber
      .map(Number)
      .filter((number) => props.lotto.includes(number)).length;
  }
}

export default Rank;
