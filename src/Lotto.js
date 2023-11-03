class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.COUNT = 0;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  compareNumber(winnerNumbers) {
    this.#numbers.forEach((number) => this.qulificationWinNumber(winnerNumbers, number));
  }

  qulificationWinNumber(winnerNumbers, number) {
    if(winnerNumbers.includes(number)) {
      this.COUNT++;
    }
  }
}

export default Lotto;
