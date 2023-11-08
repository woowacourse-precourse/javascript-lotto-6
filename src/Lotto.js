const MIN_VALUE = 1;
const MAX_VALUE = 45;
const LOTTO_NUMBER_COUNT = 6;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumberLength(numbers);  
  
    const termNumbers = [];
    numbers.forEach(number => {
      this.#validateIsNumber(number);
      this.#validateIsInteger(number);
      this.#validateNumberRange(number);
      this.#validateDuplicates(termNumbers, number);
      termNumbers.push(number);
    });
  }
  
  #validateNumberLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateIsNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 숫자가 아닌 입력이 있습니다.");
    }
  }
  
  #validateIsInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 정수가 아닌 입력이 있습니다.");
    }
  }
  
  #validateNumberRange(number) {
    if (number < MIN_VALUE || number > MAX_VALUE) {
      throw new Error("[ERROR] 1부터 45 사이의 숫자가 아닌 입력이 있습니다.");
    }
  }
  
  #validateDuplicates(numbersArray, number) {
    if (numbersArray.includes(number)) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  }

  getSortNumbers() {
    return this.#numbers.slice().sort((a, b) => a - b);
  }
}

export default Lotto;
