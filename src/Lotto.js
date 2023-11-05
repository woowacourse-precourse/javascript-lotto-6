const LOTTO_PRICE = 1000;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  validateLottoAmount() {
    return Number.isInteger(
      parseInt(this.#numbers.split(',').join(''), 10) / LOTTO_PRICE
    );
  }
}

export default Lotto;
