class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const LOTTO_LENGTH = 6;
    const set = new Set(numbers);
    const newNumbers = [...set];

    if(newNumbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6자리의 중복되지 않은 숫자여야 합니다.")
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
