import validation from './utills/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  #validate(numbers) {
    // if (numbers.length !== 6) {
    //   throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    // }
    validation.validateLottoLength(numbers);
    validation.validateLottoNumbers(numbers);
    validation.validateLottoRange(numbers);
    validation.validateLottoDuplication(numbers);
  }

  // TODO: 추가 기능 구현
  #sort(numbers) {
    return numbers.map(Number).sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
