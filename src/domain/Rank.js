import STATIC_NUMBER from "../constant/StaticNumber";

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
      3: STATIC_NUMBER.FIFTH_PLACE,
      4: STATIC_NUMBER.FOURTH_PLACE,
      5: lotto.includes(props.bonusNumber)
        ? STATIC_NUMBER.SECOND_PLACE
        : STATIC_NUMBER.THIRD_PLACE,
      6: STATIC_NUMBER.FIRST_PLACE,
    };
    return rankMapping[count];
  }

  getSameNumberCount(lotto, winningNumber) {
    return winningNumber.map(Number).filter((number) => lotto.includes(number))
      .length;
  }
}

export default Rank;
