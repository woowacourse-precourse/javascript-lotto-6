import messageFormatter from "../utils/messageFormatter.js";
import { validateNumbersDuplicate } from "./lotto.js";

/**
 * @param {number} number
 * @param {number} startInclusive
 * @param {number} endInclusive
 */
const validateBonusNumberRange = (number, startInclusive, endInclusive) => {
  const isOverRange = number < startInclusive || number > endInclusive;

  if (isOverRange) {
    throw new Error(
      messageFormatter.error.lotto.numbersIsOverRange(
        startInclusive,
        endInclusive,
      ),
    );
  }
};

const validateBonusNumberDuplicate = (numbers, bonusNumber) => {
  validateNumbersDuplicate([...numbers, bonusNumber]);
};

export { validateBonusNumberRange, validateBonusNumberDuplicate };
