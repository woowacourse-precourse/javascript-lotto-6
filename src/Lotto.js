const TEXT = {
  ERR_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  ERR_DUPLICATE: '[ERROR] 로또 번호에 중복된 수가 있어선 안됩니다.',
  ERR_RANGE: '[ERROR] 로또 번호는 1 이상 45 이하의 수여야 합니다.',
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(TEXT.ERR_LENGTH);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(TEXT.ERR_DUPLICATE);
    }

    if (1 > Math.min(...numbers) || 45 < Math.max(...numbers)) {
      throw new Error(TEXT.ERR_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
