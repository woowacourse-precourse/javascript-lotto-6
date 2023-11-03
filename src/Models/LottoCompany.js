import {
  validateBonusLength,
  validateLength,
  validateNumberRange,
} from '../../utils/Validate';
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

  issueLottos(numOfLotto) {
    const lottos = [];
    for (let index = 0; index < numOfLotto; index += 1) {
      this.#income += 1000;
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lottos.push(lotto);
    }

    return lottos;
  }
}

export default LottoCompany;
