export default class Raffle {
  #numbers;
  #bonus;

  constructor(numbers, bonus) {
    this.#numbers = numbers;
    this.#bonus = bonus;
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonus() {
    return this.#bonus;
  }
}