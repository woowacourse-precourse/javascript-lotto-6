export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  #getMatchWithNumbers(numbers) {
    let counter = 0;
    this.#numbers.forEach((number) => {
      if (numbers.includes(number)) {
        counter += 1;
      }
    });

    return counter;
  }

  #getMatchWithBonus(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true;
    }
    return false;
  }

  getRank(numbers, bonus) {
    switch (this.#getMatchWithNumbers(numbers)) {
      case 3: return '5';
      case 4: return '4';
      case 5:
        if (this.#getMatchWithBonus(bonus) === false) {
          return '3';
        }
        return '2';
      case 6: return '1';
    }
  }
}