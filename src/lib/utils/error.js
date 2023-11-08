import { ERROR_MESSAGE } from "../constants/message";
import WORD from "../constants/word";

class InputError {
  validateInputExist(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.INPUT_EXIST_ERROR);
    }
  }

  validateLottoNumberLength(input) {
    if (input.length !== 6) {
      throw new Error(ERROR_MESSAGE.INPUT_NUMBER_LENGTH_ERROR);
    }
  }

  validateLottoIsDistinct(input) {
    const set = new Set(input);
    if (set.size !== 6) {
      throw new Error(ERROR_MESSAGE.INPUT_NUMBER_IS_NOT_DISTINCT_ERROR);
    }
  }

  validateLottoInputDataType(input) {
    for (let i = 0; i < input.length; i++) {
      if (isNaN(Number(input[i]))) {
        throw new Error(ERROR_MESSAGE.INPUT_DATA_TYPE_ERROR);
      }
    }
  }

  validateInputDataType(input) {
    if (isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.INPUT_DATA_TYPE_ERROR);
    }
  }

  validateIsPositiveNumber(input) {
    if (Number(input) < 0) {
      throw new Error(ERROR_MESSAGE.POSITIVE_NUMBER_ERROR);
    }
  }

  validateLottoPaymentLength(input) {
    if (!input || input % WORD.LOTTOPRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INPUT_PAYMENT_ERROR);
    }
  }

  validateLottoNumber(input) {
    this.validateInputExist(input);
    this.validateLottoNumberLength(input);
    this.validateLottoIsDistinct(input);
  }

  validatePaymentInput(input) {
    this.validateLottoPaymentLength(input);
    this.validateInputDataType(input);
    this.validateIsPositiveNumber(input);
  }

  validateLottoInput(input) {
    this.validateInputExist(input);
    this.validateLottoNumberLength(input);
    this.validateLottoIsDistinct(input);
    this.validateLottoInputDataType(input);
  }
}

export default InputError;
