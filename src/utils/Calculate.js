class Calculate {
  #MONEY;

  constructor(money) {
    this.#MONEY = money;
  }

  howManyToBuy() {
    return parseInt(this.#MONEY / 1000, 10);
  }
}

export default Calculate;
