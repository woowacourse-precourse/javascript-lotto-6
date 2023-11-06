class Purchase {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    // 예외 아직
  }

  getAmount() {
    return this.#amount;
  }
}

export default Purchase;
