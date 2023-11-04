class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const nonDuplicateNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if(!numbers.every(this.isValidNumber)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (nonDuplicateNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  isValidNumber(number) {
    return !isNaN(number) && number >= 1 && number <= 45;
  }

  isBonusNumberDuplicate(bonus) {
    return this.#numbers.includes(bonus);
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
