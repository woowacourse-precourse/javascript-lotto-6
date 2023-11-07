class User {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  #convertToNumber(array) {
    const result = array.map((el) => Number(el));

    return result;
  }

  async getLotteryInput(lotteryInput) {
    const inputArr = this.#divdeEach(lotteryInput);
    const result = this.#convertToNumber(inputArr);

    return result;
  }

  #divdeEach(input) {
    return input.split(',');
  }

  getNumberofPurchase() {
    return this.#parseAsNumber(this.#amount) / 1000;
  }

  #parseAsNumber(string) {
    return Number(string);
  }
}

export default User;
