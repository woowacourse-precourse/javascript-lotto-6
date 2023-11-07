import { ErrorMessage } from "../model/Constant.js";

const InputValidator = {
  purchaseAmount(input) {
    if (!Number.isInteger(+input) || input.trim() === "") {
      throw new Error(ErrorMessage.USER_NUMBER_ERROR);
    }
    if (+input % 1000 !== 0) {
      throw new Error(ErrorMessage.LOTTO_COUNT_ERROR);
    }
  },
  winningNumber(input) {
    input.forEach((number) => {
      if (!Number.isInteger(+number) || number.trim() === "") {
        throw new Error(ErrorMessage.USER_NUMBER_ERROR);
      }
      if (+number < 1 || +number > 45) {
        throw new Error(ErrorMessage.LOTTO_NUMBER_ERROR);
      }
    });
  },
  bonusNumber(input) {
    if (input.length > 2) {
      throw new Error(ErrorMessage.BONUS_LENGTH_ERROR);
    }
    if (!Number.isInteger(+input) || input.trim() === "") {
      throw new Error(ErrorMessage.USER_NUMBER_ERROR);
    }
    if (+input < 1 || +input > 45) {
      throw new Error(ErrorMessage.LOTTO_NUMBER_ERROR);
    }
  },
};

export default InputValidator;
