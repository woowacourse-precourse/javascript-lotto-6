import ERROR from "../constants/error.js";
import messageFormatter from "../utils/messageFormatter.js";

/**
 * @param {number[]} numbers
 * @param {number} length
 */
const validateNumbersLength = (numbers, length) => {
  if (numbers.length !== length) {
    throw new Error(messageFormatter.error.lotto.numbersLength(length));
  }
};

/**
 * @param {number[]} numbers
 * @param {number} startInclusive
 * @param {number} endInclusive
 */
const validateNumbersRange = (numbers, startInclusive, endInclusive) => {
  const isOverRange = numbers.some(
    (number) => number < startInclusive || number > endInclusive,
  );

  if (isOverRange) {
    throw new Error(
      messageFormatter.error.lotto.numbersIsOverRange(
        startInclusive,
        endInclusive,
      ),
    );
  }
};

/**
 * @param {number[]} numbers
 */
const validateNumbersDuplicate = (numbers) => {
  const isDuplicate = Array.from(new Set(numbers)).length !== numbers.length;

  if (isDuplicate) {
    throw new Error(
      messageFormatter.error.default(ERROR.lotto.numberDuplicate),
    );
  }
};

export {
  validateNumbersLength,
  validateNumbersRange,
  validateNumbersDuplicate,
};
