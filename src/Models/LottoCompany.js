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
    let count = 0;
    this.#numbers.forEach((number) => {
      if (number in lotto.numbers) {
        count += 1;
      }
    });
    return count;
  }
}

export default LottoCompany;
