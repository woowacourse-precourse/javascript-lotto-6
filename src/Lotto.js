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
    if ([...new Set(numbers)].length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }
  }
  get getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
  compareNumbers(array, bonus) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      if (array.includes(this.#numbers[i])) {
        count++;
      }
    }

    if (count == 6) return 5;
    if (count == 5) {
      if (array.includes(bonus)) return 4;
      return 3;
    }
    if (count == 4) return 2;
    if (count == 3) return 1;

    return 0;
  }
}

export default Lotto;
