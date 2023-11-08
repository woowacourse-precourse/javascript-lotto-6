class Rank {
  #lottos;
  #rankStatistic;

  constructor(lottos) {
    this.#rankStatistic = Array(5).fill(0);
    this.#lottos = lottos;
  }

  getRankStatistic(props) {
    this.#lottos.forEach((lotto) => {
      const rank = this.getRank(lotto, props);
      if (rank) this.#rankStatistic[rank - 1] += 1;
    });
    return this.#rankStatistic;
  }

  getRank(lotto, props) {
    const count = this.getSameNumberCount(lotto, props.winningNumber);
    const rankMapping = {
      3: 5,
      4: 4,
      5: lotto.includes(props.bonusNumber) ? 2 : 3,
      6: 2,
    };
    return rankMapping[count];
  }

  getSameNumberCount(lotto, winningNumber) {
    return winningNumber.map(Number).filter((number) => lotto.includes(number))
      .length;
  }
}

export default Rank;
