class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복 없이 6개여야 합니다.");
    }

    if (numbers.some((el) => el < 1 || el > 45 || !Number.isInteger(el))) {
      throw new Error("[ERROR] 로또 번호는 1에서 45사이의 자연수여야 합니다.");
    }
  }

}

export default Lotto;
