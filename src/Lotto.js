import { NUMBER, TEXT } from './component/Data.js';

class Lotto {
  #numbers;

  constructor(inputNumberList, inputBounsNumber) {
    this.#numbers = inputNumberList;
    this.inputBounsNumber = inputBounsNumber;
    this.#validate(inputNumberList);
  }

  #validate() {
    this.#validateLength();
    this.#validateNumberRange();
    this.#validateNaN();
    this.#validateOverlap();
  }

  #validateLength() {
    if (this.#numbers.length !== NUMBER.LOTTO_LENGTH) {
      throw new Error(TEXT.LENGTH_ERROR);
    }
  }

  #validateNumberRange() {
    if (
      Math.max(...this.#numbers) > NUMBER.MAX_LOTTO_NUMBER ||
      Math.min(...this.#numbers) < NUMBER.MIN_LOTTO_NUMBER
    ) {
      throw new Error(TEXT.NUMBER_ERROR);
    }
  }

  #validateNaN() {
    if (this.#numbers.includes(NaN) || Number.isNaN(this.inputBounsNumber)) {
      throw new Error(TEXT.STRING_ERROR);
    }
  }

  #validateOverlap() {
    const overlapCheck = [...this.#numbers, this.inputBounsNumber];
    overlapCheck.map((numbers, index) => {
      if (overlapCheck.indexOf(numbers) !== index) {
        throw new Error(TEXT.OVERLAP_ERROR);
      }
    });
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
