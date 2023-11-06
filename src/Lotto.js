import Validator from './util/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.validateLength(numbers);
    this.validateDuplicate(numbers);
    numbers.map((number) => Lotto.validateLottoNumber(number));
  }

  validateLength(numbers) {
    if (numbers.length !== 6) throw ('[ERROR] 로또 번호는 6개여야 합니다.');
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) throw ('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
  }

  static validateLottoNumber(number) {
    if (number < 1 || number > 45) throw ('[ERROR] 로또 번호는 1 ~ 45의 숫자여야합니다.');
  }

  static validateBonusNumberInWinningNumber(WinningNumbers, BonusNumber) {
    if (WinningNumbers.includes(BonusNumber)) throw ('[ERROR] 당첨번호와 보너스 번호는 중복되지 않아야 합니다.')
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
