import message from './utils/message.js';

class Lotto {
  // winning lotto
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const changeSet = [...new Set(numbers)];
    if (numbers.length !== 6) {
      throw new Error(message.ERROR_MUST_BE_SIX_LENGTH);
    } else if (changeSet.length !== numbers.length) {
      throw new Error(message.ERROR_CAN_NOT_BE_DUPLICATED);
    }
    numbers.forEach((number) => {
      if (/[^0-9]/g.test(number)) {
        throw new Error(message.ERROR_ONLY_NUMBER);
      } else if (number <= 0 || number > 45) {
        throw new Error(message.ERROR_NUMBER_RANGE_1_TO_45);
      }
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  computeMatchWithLotto(lottos) {
    let matches = 0;
    this.#numbers.forEach((num) => {
      if (lottos.includes(Number(num))) {
        matches += 1;
      }
    });
    return matches;
  }
}

export default Lotto;
