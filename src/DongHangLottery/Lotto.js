class Lotto {
  // number의 # prefix 변경 금지
  // Lotto에 필드 추가 금지
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    numbers.forEach(item => {
      if (isNaN(item)) throw new Error('[ERROR]');
    });

    if ([...new Set(numbers)].length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
