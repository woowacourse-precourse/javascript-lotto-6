import { 
  validateDuplicationNumbers, 
  validateNumbers, 
  validateNumbersLength,
  validateNumbersRange 
} from "../validations/LottoValidations.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateNumbersLength(numbers);
    validateNumbersRange(numbers);
    validateDuplicationNumbers(numbers);
    validateNumbers(numbers);
  }

  getLottoNumbers() {
    return [...this.#numbers]
  }

}

export default Lotto;