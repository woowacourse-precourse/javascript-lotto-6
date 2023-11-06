import Validation from './Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateLottoNumberType(numbers);
    Validation.validateLottoNumberLength(numbers);
    Validation.validateLottoNumberDuplicate(numbers);
    Validation.validateLottoNumberRange(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
  // TODO: 로또 등수별 확인 메서드
  // TODO: 로또 번호 확인 가능 메서드
}

export default Lotto;
