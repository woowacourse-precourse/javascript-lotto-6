export default class Returns {
  #returns;

  constructor() {
    this.#returns = 0;
  }

  add(amount) {
    this.#returns += amount;
  }

  get() {
    return this.#returns;
  }
}
