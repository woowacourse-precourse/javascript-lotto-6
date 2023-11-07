class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.numberNaNvalidity(numbers);
    this.numberRangeValidity(numbers);
    this.numberDuplicateValidity(numbers);
    this.#numbers = this.numbersSort(numbers);
  }

  numbersSort(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  numberNaNvalidity(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) {
        throw new Error("[ERROR] 숫자를 입력하시오.");
      }
    }
  }

  numberRangeValidity(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1) {
        throw new Error("[ERROR] 1~45 사이의 숫자를 입력하시오.");
      }
      if (numbers[i] > 45) {
        throw new Error("[ERROR] 1~45 사이의 숫자를 입력하시오.");
      }
    }
  }

  numberDuplicateValidity(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 1~45 사이의 중복되지 않은 숫자를 입력하시오.");
    }
  }
}

export default Lotto;
