class Price {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = price;
  }

  #validate(price) {
    const parsedAmount = parseInt(price, 10);
    if (isNaN(price) || parsedAmount % 1000 !== 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  getPrice() {
    return parseInt(this.#price, 10);
  }
}

export default Price;
