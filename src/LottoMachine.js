import { commonValidation, lottoMachineValidation } from "./validator/index.js";
import LottoError from "./LottoError.js";

export default class LottoMachine {
  #correctNumbers;
  #bonusNumber;

  constructor(correctNumbers, bonusNumber) {
    this.#validate(correctNumbers, bonusNumber);
    const splitedNumbers = correctNumbers.split(',').map(Number);
    this.#correctNumbers = splitedNumbers;
    this.#bonusNumber = Number(bonusNumber);
  }

  getCorrectNumbers() {
    return this.#correctNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  static createLottoMachine(correctNumbers, bonusNumber) {
    return new this(correctNumbers, bonusNumber);
  }

  #validate(correctNumbers, bonusNumber) {
    this.#validateCorrectNumbers(correctNumbers);
    this.#validateBonusNumber(correctNumbers, bonusNumber);
  }

  #validateCorrectNumbers(correctNumbers) {
    Object.values(lottoMachineValidation.correctNumbers).forEach(
      ({ errorMessage, isInvalid }) => {
        if (isInvalid(correctNumbers))
          throw LottoError.createLottoError(errorMessage);
      }
    )
    this.#validateCommon(correctNumbers);
  }

  #validateBonusNumber(correctNumbers, bonusNumber) {
    Object.values(lottoMachineValidation.bounusNumber).forEach(
      ({ errorMessage, isInvalid }) => {
        if (isInvalid(correctNumbers, bonusNumber))
          throw LottoError.createLottoError(errorMessage);
      }
    )
    this.#validateCommon(bonusNumber);
  }

  #validateCommon(numbers) {
    this.#validateCommonWrapper(numbers,
      (number) => {
        Object.values(commonValidation).forEach(
          ({ errorMessage, isInvalid }) => {
            if (isInvalid(number))
              throw LottoError.createLottoError(errorMessage);
          }
        )
      }
    )
  }

  #validateCommonWrapper(numbers, callback) {
    numbers.split(',').map(Number).forEach(number => {
      callback(number);
    })
  }

}
