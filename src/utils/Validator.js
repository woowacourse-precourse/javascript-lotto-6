import { ErrorMessage } from "../static/Constant.js";
import CheckDuplicates from "./CheckDuplicates.js";

const InputValidator = {
  purchaseAmount(input) {
    if (input.includes(" ")) {
      throw new Error(ErrorMessage.USER_NUMBER_ERROR);
    }
    if (+input <= 0) {
      throw new Error(ErrorMessage.USER_NUMBER_ERROR);
    }
    if (!Number.isInteger(+input) || input.trim() === "") {
      throw new Error(ErrorMessage.USER_NUMBER_ERROR);
    }
    if (+input % 1000 !== 0) {
      throw new Error(ErrorMessage.LOTTO_COUNT_ERROR);
    }
  },
  winningNumber(input) {
    if (input.length !== 6) {
      throw new Error(ErrorMessage.LOTTO_LENGTH_ERROR);
    }
    input.forEach((number) => {
      if (!Number.isInteger(+number) || number.trim() === "") {
        throw new Error(ErrorMessage.USER_NUMBER_ERROR);
      }
      if (+number < 1 || +number > 45) {
        throw new Error(ErrorMessage.LOTTO_NUMBER_ERROR);
      }
    });
    if (CheckDuplicates.winningNumber(input)) {
      throw new Error(ErrorMessage.USER_DUPLICATE_ERROR);
    }
  },
  bonusNumber(input) {
    if (input === "" || input.includes(" ")) {
      throw new Error(ErrorMessage.USER_NUMBER_ERROR);
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
