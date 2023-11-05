class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
  }

  #validate(numbers) {
    if (!numbers.includes(',')) {
      throw new Error('[ERROR] 로또 번호는 콤마로 구분하여 입력하여야 합니다.');
    }
    if (new Set(numbers.split(',')).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않은 6개여야 합니다.');
    }
    numbers.split(',').map((number) => {
      if (!(Number(number) >= 1 && Number(number) <= 45)) {
        throw new Error('[ERROR] 로또 번호는 1 이상 45 이하여야 합니다.');
      }
    });
    this.#numbers = numbers.split(',').map((number) => Number(number));
  }

  get winningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
