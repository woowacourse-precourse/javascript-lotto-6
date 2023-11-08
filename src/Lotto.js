class Lotto {
  #numbers;

  constructor(numbers, isBonus = false) {
    this.#validate(numbers, isBonus);
    this.#numbers = numbers;
  }

  #validate(numbers, isBonus) {
    if(numbers.some(num => num < 1 || num > 45)){
        throw new Error("[ERROR] 입력 값은 1~45 까지의 숫자입니다");
    }
    if (!isBonus && numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
