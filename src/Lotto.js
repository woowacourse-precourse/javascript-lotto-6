// Model

import { ERROR } from './lib/Prompt';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR.length);
    const tempSet = new Set(numbers);
    if (tempSet.size !== numbers.legnth) throw new Error(ERROR.duplicate);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
