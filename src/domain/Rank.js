import NUMBER from "../static/Number.js";

class Rank {
  #lottos;
  #rankStatistic;

  constructor(lottos) {
    this.#rankStatistic = Array(NUMBER.lottoRank).fill(0);
    this.#lottos = lottos;
  }
  /**
   * @param Object props { winningNumber: 당첨 번호 배열, bonusNumber: 보너스 번호 }
   * @returns {number} 구매한 로또 당첨 등수
   */
  #getRank(lotto, props) {
    const count = this.#getSameNumberCount(lotto, props.winningNumber);
    switch (count) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (lotto.includes(props.bonusNumber)) return 2;
        return 3;
      case 6:
        return 1;
    }
  }

  getRankStatistic(props) {
    this.#lottos.forEach((lotto) => {
      const rank = this.#getRank(lotto, props);
      if (rank) this.#rankStatistic[rank - 1] += 1;
    });
    return this.#rankStatistic;
  }

  #getSameNumberCount(lotto, winningNumber) {
    return winningNumber.map(Number).filter((number) => lotto.includes(number))
      .length;
  }
}

export default Rank;
