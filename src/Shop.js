class Shop {
  #answer;
  #bonus;

  constructor() {
    this.#answer = [];
    this.#bonus = 0;
  }
  temp() {
    return this.#answer
  }

  inputAnswer(numbers) {
    this.#answer = numbers;
  }

  inputBonus(bonus) {
    if (this.#answer.includes(bonus)) return false;
    this.#bonus = bonus;
  }

  check(lotto) {
    const numbers = lotto.getLottoNumbers();
    const count = numbers.reduce(
      (acc, item) => (this.#answer.includes(item) ? acc + 1 : acc),
      0
    );
    return {
      6: 1,
      5: numbers.includes(this.#bonus) ? 2 : 3,
      4: 4,
      3: 5,
      2: 6,
      1: 7,
      0: 8
    }[count] ?? 0;
  }
}

export default Shop;
