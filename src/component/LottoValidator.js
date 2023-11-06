import { NUMBER, TEXT } from './data.js';

class LottoValidator {
  constructor(inputNumberList, inputBounsNumber) {
    this.inputNumberList = inputNumberList;
    this.inputBounsNumber = inputBounsNumber;
  }

  validate() {
    if (this.inputNumberList.length !== NUMBER.LOTTO_LENGTH)
      throw new Error(TEXT.LENGTH_ERROR);
    if (
      Math.max(...this.inputNumberList) > NUMBER.MAX_LOTTO_NUMBER ||
      Math.min(...this.inputNumberList) < NUMBER.MIN_LOTTO_NUMBER
    )
      throw new Error(TEXT.NUMBER_ERROR);
    if (
      this.inputNumberList.includes(NaN) ||
      Number.isNaN(this.inputBounsNumber)
    )
      throw new Error(TEXT.STRING_ERROR);
    const overlapCheck = [...this.inputNumberList, this.inputBounsNumber];
    overlapCheck.map((numbers, index) => {
      if (overlapCheck.indexOf(numbers) !== index)
        throw new Error(TEXT.OVERLAP_ERROR);
    });
  }
}

export default LottoValidator;
