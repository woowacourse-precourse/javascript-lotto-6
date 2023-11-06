class TargetNumber {
  #targetNumber;

  constructor(numbers) {
    this.#targetNumber = numbers;
  }

  getWinNumber() {
    return this.#targetNumber;
  }
}

export default TargetNumber;