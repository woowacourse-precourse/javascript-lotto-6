const ERROR_MESSAGE = {
  LENGTH_ERROR: "[ERROR] 로또 번호는 6개여야 합니다. ",
  DUPLICATE_ERROR: "[ERROR] 중복되지 않는 값으로 입력해주세요. ",
  RANGE_ERROR: "[ERROR] 1~45 사이의 수를 입력해주세요. "
}

const NUMBER = {
  LOTTO_LENGTH: 6,
  RANGE_START: 0,
  RANGE_END: 45
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER.LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
    }
    this.numberValidate(numbers);
  }

  numberValidate(numbers) {
    for (let i = NUMBER.RANGE_START; i < NUMBER.LOTTO_LENGTH; i++) {
      if (numbers[i] > NUMBER.RANGE_END) {
        throw new Error(ERROR_MESSAGE.RANGE_ERROR);
      }
      else if (numbers[i] <= NUMBER.RANGE_START) {
        throw new Error(ERROR_MESSAGE.RANGE_ERROR);
      }
    }
  }

  getValidate() {
    return this.#validate;
  }
}

export default Lotto;
