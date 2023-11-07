import {
  validateBonus,
  validateLength,
  validateNumberRange,
} from '../../utils/Validate';
import generateLottoNumbers from '../../utils/generateLottoNumbers';
import winningsTable from '../../utils/winningsTable';
import Lotto from './Lotto';

class LottoCompany {
  #bonusNumber = 0;

  #numbers = [];

  #income = 0;

  set numbers(numbers) {
    validateNumberRange(numbers);
    validateLength(numbers);
    this.#numbers = numbers;
  }

  set bonusNumber(number) {
    validateBonus(this.#numbers, number);
    this.#bonusNumber = number;
  }

  get numbers() {
    return this.#numbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  issueLottos(numOfLottos) {
    const lottos = [];
    for (let index = 0; index < numOfLottos; index += 1) {
      this.#income += 1000;
      const lotto = new Lotto(generateLottoNumbers());
      lottos.push(lotto);
    }
    return lottos;
  }

  match(lotto) {
    let count = 0;
    this.#numbers.forEach((number) => {
      if (lotto.numbers.includes(number)) {
        count += 1;
      }
    });
    return count;
  }

  matchBonus(lotto) {
    return lotto.numbers.includes(this.#bonusNumber);
  }

  calculateStatistics(lottos) {
    const statistics = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
    };
    lottos.forEach((lotto) => {
      const matchedNum = this.match(lotto);
      const isMatchedBonus = this.matchBonus(lotto);

      if (isMatchedBonus && matchedNum === 5) {
        statistics['bonus'] += 1;
        return;
      }
      statistics[matchedNum] += 1;
    });

    return statistics;
  }

  calculateRateOfReturn(lottos) {
    let totalWinning = 0;

    lottos.forEach((lotto) => {
      const matchedNum = this.match(lotto);
      totalWinning += winningsTable[matchedNum];
    });

    return (totalWinning / this.#income) * 100;
  }
}

export default LottoCompany;
