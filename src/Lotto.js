import LottoResult from './LottoResult';
import { LOTTO_CONSTANTS } from './constants/constants';
import { LOTTO_ERROR } from './errorMessages/errorMessage';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortAscending();
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONSTANTS.digits) throw new Error(LOTTO_ERROR.digits);

    if (numbers.length !== new Set(numbers).size) throw new Error(LOTTO_ERROR.duplication);
  }

  #sortAscending() {
    const sortedLottoNumbers = this.#numbers.sort((number1, number2) => (number1 = number2));

    this.#numbers = sortedLottoNumbers;
  }

  determineResult(userLottoArray, userBonusNumber) {
    const lottoMatched = userLottoArray.filter((userLottoNum) => {
      return this.#numbers.includes(userLottoNum);
    });

    const bounsMatched = this.#numbers.includes(userBonusNumber);

    return LottoResult.getPrize(lottoMatched.length, bounsMatched);
  }

  getLottoNumbersString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
