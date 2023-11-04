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
  
  getSortNumbers() {
    return this.#numbers.slice().sort((a, b) => a - b);
  }
}

export default Lotto;
