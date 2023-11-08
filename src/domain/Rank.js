import NUMBER from '../constants/Number.js';

class Rank {
  #lottos;
  #rankResult;

  constructor(lottos) {
    this.#rankResult = Array(NUMBER.lottoRank).fill(0);
    this.#lottos = lottos;
  }

  #getSameNumberCount(lotto, winningNumber) {
    return winningNumber.map(Number).filter((number) => lotto.includes(number)).length;
  }

  #getRank(lotto, props) {
    const count = this.#getSameNumberCount(lotto, props.winningNumber);
    const rankMapping = {
      3: NUMBER.fifthRank,
      4: NUMBER.fourthRank,
      5: lotto.includes(props.bonusNumber) ? NUMBER.secondRank : NUMBER.thirdRank,
      6: NUMBER.firstRank,
    };
    return rankMapping[count];
  }

  getRankResult(props) {
    this.#lottos.forEach((lotto) => {
      const rank = this.#getRank(lotto, props);
      if (rank) this.#rankResult[rank - 1] += 1;
    });
    return this.#rankResult;
  }
}

export default Rank;

