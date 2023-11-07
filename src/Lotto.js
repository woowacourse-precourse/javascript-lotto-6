export const LOTTO_PRICE = 1000;

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

  static calculateQuantityFromPrice(price) {
    return price / LOTTO_PRICE;
  }
}

export default Lotto;
