import round from './utils/round';
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

  getMathResult(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const mathNumbers = this.#winnerNumbers.filter((number) => lottoNumbers.includes(number));

    const mathNumber = mathNumbers.length;
    const isMatchBonus = lottoNumbers.includes(this.#bonusNumber);

    return { mathNumber, isMatchBonus };
  }

  setPrizeResult(lottos) {
    const mathResult = lottos.map((lotto) => this.getMathResult(lotto));

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
    const ratioString = `${round(profitRatio)}%`;

    return ratioString;
  }
}

export default Computer;
