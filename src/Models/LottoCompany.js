import {
  validateBonusLength,
  validateLength,
  validateNumberRange,
} from '../../utils/Validate';
import generateLottoNumbers from '../../utils/generateLottoNumbers';
import Lotto from './Lotto';

class LottoCompany {
  #numbers = [];

  #income;

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
    console.log('=========');
    let count = 0;
    this.#numbers.forEach((number) => {
      if (lotto.numbers.includes(number)) {
        console.log(number);

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
}

export default LottoCompany;
