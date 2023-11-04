class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  sortNumbers() {
    this.#numbers.sort(function(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    });
  }
}

export default Lotto;
