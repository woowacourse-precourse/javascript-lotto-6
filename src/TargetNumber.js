class TargetNumber {
  #targetNumber;

  constructor(numbers) {
    this.#targetNumber = numbers;
  }

  getTargetNumber() {
    return this.#targetNumber;
  }

  hasNumber(number) {
    return this.#targetNumber.includes(number);
  }
}

export default TargetNumber;