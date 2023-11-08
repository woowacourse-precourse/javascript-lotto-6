import { lottoNumberValidator } from './utils/validator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Object.keys(lottoNumberValidator).forEach(validate => {
      lottoNumberValidator[validate](numbers);
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
