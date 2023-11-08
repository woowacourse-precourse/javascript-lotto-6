class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#lengthCheck(numbers);
    this.#inRangeNumCheck(numbers);
    this.#sameNumCheck(numbers);
    this.#isNumCheck(numbers);
  }

  #lengthCheck(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }
  #sameNumCheck(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 당첨번호가 존재합니다.");
    }
  }

  #isNumCheck(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) {
        throw new Error("[ERROR] 숫자로 입력해 주세요");
      }
    }
  }
  #inRangeNumCheck(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (Number(numbers[i]) > 45 || Number(numbers[i]) < 1) {
        throw new Error("[ERROR] 1~45 값으로 입력해주세요");
      }
    }
  }

  returnNumber() {
    return this.#numbers;
  }
}

export default Lotto;
