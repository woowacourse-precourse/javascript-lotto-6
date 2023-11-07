import { ERROR_MESSAGE } from "../constants/message";

class InputError {
  validateInputExist(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.INPUT_EXIST_ERROR);
    }
  }

  validateLottoInputLength(input) {
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

  validateLottoInput(input) {
    this.validateInputExist(input);
    this.validateLottoInputLength(input);
    this.validateLottoIsDistinct(input);
  }
}

export default InputError;
