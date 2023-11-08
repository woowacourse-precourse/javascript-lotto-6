import NUMBER from "../static/Number.js";

class Rank {
  #lottos;
  #rankStatistic;

  constructor(lottos) {
    this.#lottos = lottos;
    this.#rankStatistic = Array(NUMBER.lottoRank).fill(0);
  }

  #getSameNumberCount(lotto, winningNumber) {
    return winningNumber.map(Number).filter((number) => lotto.includes(number))
      .length;
  }

  /**
   * @param Object props { winningNumber: 당첨 번호 배열, bonusNumber: 보너스 번호 }
   * @returns {number} 구매한 로또 당첨 등수
   */
  #getRank(lotto, props) {
    const count = this.#getSameNumberCount(lotto, props.winningNumber);
    const rankMapping = {
      3: NUMBER.fifthPlace,
      4: NUMBER.fourthPlace,
      5: lotto.includes(props.bonusNumber)
        ? NUMBER.secondPlace
        : NUMBER.thirdPlace,
      6: NUMBER.firstPlace,
    };
    return rankMapping[count];
  }

  getRankStatistic(props) {
    this.#lottos.forEach((lotto) => {
      const rank = this.#getRank(lotto, props);
      if (rank) this.#rankStatistic[rank - 1] += 1;
    });
    return this.#rankStatistic;
  }
}

export default Rank;
