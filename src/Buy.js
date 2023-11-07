class Buy {
  #amount;
  #count;
  #randomNumbers;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.#randomNumbers = new Array();
  }

  #validate(amount) {
    if (isNaN(amount)) throw new Error("[ERROR] 숫자를 입력해 주세요.");
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
  }
  getAmount() {
    return this.#amount;
  }
  setCount(count) {
    this.#count = count;
  }
  getCount() {
    return this.#count;
  }
  setRandomNumbers(randomNumber) {
    this.#randomNumbers.push(randomNumber);
  }
  getRandomNumbers() {
    return this.#randomNumbers;
  }
}

export default Buy;
