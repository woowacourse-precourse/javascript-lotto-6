import { 
  VALIDATION_THE_NUMBER_OF_LOTTO_NUMBER,
  VALIDATION_LOTTO_NUMBER_RANGE,
  VALIDATION_LOTTO_NUMBER_OVERLAP
} from "./constant/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }


  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(VALIDATION_THE_NUMBER_OF_LOTTO_NUMBER);
    }

    const lottoNumbers = [];
    numbers.forEach(number => {
      if (number < 1 || number > 45) {
        throw new Error(VALIDATION_LOTTO_NUMBER_RANGE);
      }
      if (lottoNumbers.includes(number)) {
        throw new Error(VALIDATION_LOTTO_NUMBER_OVERLAP);
      }

      lottoNumbers.push(number);
    });
  }

  // TODO: 추가 기능 구현
  get myNumbers() {
    return this.#numbers;
  }

  sortLottoNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
