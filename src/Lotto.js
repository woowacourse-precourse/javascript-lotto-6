class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    if (numbers.includes(NaN))
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    if (this.#containsDecimals(numbers))
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    if (this.#containsDuplicates(numbers))
      throw new Error('[ERROR] 중복되는 숫자가 있습니다.');
    if (this.#isOutOfRange(numbers))
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이여야 합니다.');
  }

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }

  #containsDuplicates(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) return true;
    return false;
  }

  #containsDecimals(numbers) {
    let containsDecimals = false;
    numbers.forEach(x => {
      const string = x.toString();
      if (string.includes('.')) containsDecimals = true;
    });
    return containsDecimals;
  }

  #isOutOfRange(numbers) {
    let isOutOfRange = false;
    numbers.forEach(x => {
      if (x < 1 || x > 45) isOutOfRange = true;
    });
    return isOutOfRange;
  }
}

export default Lotto;
