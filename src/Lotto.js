class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateIsNumberLengthSix(numbers);
    this.#validateIsNumberDuplicated(numbers);
    this.#validateIsString(numbers);
    this.#validateIsLottoNumber(numbers);
    this.#numbers = numbers;
  }

  #validateIsNumberLengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateIsNumberDuplicated(numbers) {
    const IS_DUPLICATED = numbers.some(
      (number, index) => numbers.indexOf(number) !== index
    );

    if (IS_DUPLICATED) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
  }

  #validateIsString(numbers) {
    const IS_STRING = numbers.some((number) => /[^0-9]/.test(number));

    if (IS_STRING) {
      throw new Error('[ERROR] 로또 번호는 숫자만 입력 가능합니다.');
    }
  }

  #validateIsLottoNumber(numbers) {
    const IS_LOTTO_NUMBER = numbers.some(
      (number) => Number(number) < 1 || Number(number) > 45
    );

    if (IS_LOTTO_NUMBER) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
}

export default Lotto;
