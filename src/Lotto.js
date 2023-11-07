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

    const uniqueNumbers = new Set(numbers);  // 중복 숫자 예외 발생
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.");
    }
  }
}

export default Lotto;