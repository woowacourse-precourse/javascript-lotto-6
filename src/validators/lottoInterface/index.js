import ERROR from "../../constants/error.js";
import {
  isExistNotNumberAndCommaInString,
  isExistNotNumberInString,
} from "./checkIsExistInString.js";
import messageFormatter from "../../utils/messageFormatter.js";

/**
 * @param {string} answer
 */
export const validateAmountToPurchase = (answer) => {
  if (isExistNotNumberInString(answer)) {
    throw new Error(messageFormatter.error.default(ERROR.input.onlyNumber));
  }
};

/**
 * @param {string} answer
 */
export const validateWinningNumbers = (answer) => {
  if (isExistNotNumberAndCommaInString(answer)) {
    throw new Error(
      messageFormatter.error.default(ERROR.input.onlyNumberAndComma),
    );
  }
};

/**
 * @param {string} answer
 */
export const validateBonusNumber = (answer) => {
  if (isExistNotNumberInString(answer)) {
    throw new Error(messageFormatter.error.default(ERROR.input.onlyNumber));
  }
};
