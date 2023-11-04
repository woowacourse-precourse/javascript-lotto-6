class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else if (this.findStringInNumbers(numbers)) {
      throw new Error("[ERROR] 로또 번호에 문자가 있습니다.")
    } else if (this.findOverNumbers(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.")
    } else if (this.findDuplicationInNumbers(numbers)) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  // TODO: 추가 기능 구현
  findStringInNumbers(numbers) {
    return numbers.some(item => isNaN(item));
  }
  
  findOverNumbers(numbers) {
    return numbers.some(item => item < 1 || item > 45);
  }

  findDuplicationInNumbers(numbers) {
    const duplication_numbers = new Set(numbers);
    return duplication_numbers.size !== numbers.length;
  }
}

export default Lotto;
