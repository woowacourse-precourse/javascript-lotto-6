import {
  validateBonusLength,
  validateLength,
  validateNumberRange,
} from '../../utils/Validate';
import generateLottoNumbers from '../../utils/generateLottoNumbers';
import winningsTable from '../../utils/winningsTable';
import Lotto from './Lotto';

class LottoCompany {
  #numbers = [];

  #income = 0;

  set numbers(numbers) {
    validateNumberRange(numbers);
    validateLength(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  pushBonus(number) {
    validateBonusLength(this.#numbers);
    validateNumberRange([number]);
    this.#numbers.push(number);
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

  calculateStatics(lottos) {
    const statics = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };
    lottos.forEach((lotto) => {
      const matchedNum = this.match(lotto);
      statics[matchedNum] += 1;
    });

    return statics;
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
