import NumberGenerator from './util/NumberGenerator.js';
import ERROR from './Constants/Error.js';
import { NUMBER } from './Constants/Lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generateLottos(ticket) {
    return Array(ticket).fill().map(() => new Lotto(NumberGenerator.generator(NUMBER.minNumber, NUMBER.maxNumber, NUMBER.defaultLength)).getNumbers());
  }

  #validate(numbers) {
    this.validateLength(numbers);
    this.validateDuplicate(numbers);
    numbers.map((number) => Lotto.validateLottoNumber(number));
  }

  validateLength(numbers) {
    if (numbers.length !== NUMBER.defaultLength) throw (ERROR.lottoLength);
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== NUMBER.defaultLength) throw (ERROR.lottoDuplicate);
  }

  static validateLottoNumber(number) {
    if (number < NUMBER.minNumber || number > NUMBER.maxNumber) throw (ERROR.lottoNumberRange);
  }

  static validateBonusNumberInWinningNumber(WinningNumbers, BonusNumber) {
    if (WinningNumbers.includes(BonusNumber)) throw (ERROR.bonusNumberInWinningNumber);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;

