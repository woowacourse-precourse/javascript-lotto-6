const FIRST = 'first';
const SECOND = 'second';
const THIRD = 'third';
const FOURTH = 'fourth';
const FIFTH = 'fifth';

const prizeMony = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

const prizeConditionArr = [
  { key: { mathNumber: 6, isMatchBonus: false }, value: FIRST },
  { key: { mathNumber: 5, isMatchBonus: true }, value: SECOND },
  { key: { mathNumber: 5, isMatchBonus: false }, value: THIRD },
  { key: { mathNumber: 5, isMatchBonus: true }, value: THIRD },
  { key: { mathNumber: 4, isMatchBonus: false }, value: FOURTH },
  { key: { mathNumber: 4, isMatchBonus: true }, value: FOURTH },
  { key: { mathNumber: 3, isMatchBonus: false }, value: FIFTH },
  { key: { mathNumber: 3, isMatchBonus: true }, value: FIFTH },
];

const map = new Map();
prizeConditionArr.forEach((elem) => map.set(JSON.stringify(elem.key), elem.value));

class Computer {
  #cost;
  #winnerNumbers;
  #bonusNumber;
  #prizeResult;

  constructor(winnnersNumbers, bonusNumber, cost) {
    this.#winnerNumbers = winnnersNumbers;
    this.#bonusNumber = bonusNumber;
    this.#prizeResult = {
      [FIRST]: 0,
      [SECOND]: 0,
      [THIRD]: 0,
      [FOURTH]: 0,
      [FIFTH]: 0,
    };
    this.#cost = cost;
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
      const prize = map.get(keyString);

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
      return profit + prizeMony[place] * this.#prizeResult[place];
    }, 0);
    const profitRatio = (totlaProfit / this.#cost) * 100;
    const ratioString = `${Math.round((profitRatio * 10).toPrecision(15)) / 10}%`;

    return ratioString;
  }
}

export default Computer;
