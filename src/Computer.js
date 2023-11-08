import { prize, rank, conditionMap } from './datas/prize';

class Computer {
  #cost;
  #winnerNumbers;
  #bonusNumber;
  #prizeResult;

  constructor(winnnersNumbers, bonusNumber, cost) {
    this.#winnerNumbers = winnnersNumbers;
    this.#bonusNumber = bonusNumber;
    this.#cost = cost;
    this.#prizeResult = {};

    rank.forEach((elem) => (this.#prizeResult[elem] = 0));
  }

  setPrizeResult(lottos) {
    const mathResult = lottos.map((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const mathNumbers = this.#winnerNumbers.filter((number) => lottoNumbers.includes(number));

      const mathNumber = mathNumbers.length;
      const isMatchBonus = lottoNumbers.includes(this.#bonusNumber);

      return { mathNumber, isMatchBonus };
    });

    mathResult.forEach((elem) => {
      const keyString = JSON.stringify(elem);
      const prize = conditionMap.get(keyString);

      if (prize !== undefined) {
        this.#prizeResult[prize] += 1;
      }
    });
  }

  getPrizeResult() {
    return this.#prizeResult;
  }

  getProfitRatio() {
    const places = Object.keys(this.#prizeResult);
    const totlaProfit = places.reduce((profit, place) => {
      const currentProfit = profit + prize[place].money * this.#prizeResult[place];
      return currentProfit;
    }, 0);
    const profitRatio = (totlaProfit / this.#cost) * 100;
    const ratioString = `${Math.round((profitRatio * 10).toPrecision(15)) / 10}%`;

    return ratioString;
  }
}

export default Computer;
