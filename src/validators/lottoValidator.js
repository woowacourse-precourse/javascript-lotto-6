/**
 *
 * @param {number[]} numbers
 * @param {number} length
 */
const validateNumbersLength = (numbers, length) => {
  if (numbers.length !== length) {
    throw new Error(`[ERROR] 로또 번호는 ${length}개여야 합니다.`);
  }
};

/**
 *
 * @param {number[]} numbers
 * @param {number} startInclusive
 * @param {number} endInclusive
 */
const validateNumberRange = (numbers, startInclusive, endInclusive) => {
  const isOverRange = numbers.some(
    (number) => number < startInclusive || number > endInclusive,
  );

  if (isOverRange) {
    throw new Error(
      `[ERROR] 로또 번호의 숫자 범위는 ${startInclusive}~${endInclusive} 입니다.`,
    );
  }
};

/**
 *
 * @param {number[]} numbers
 */
const validateNumberIsDuplicate = (numbers) => {
  const isDuplicate = Array.from(new Set(numbers)).length !== numbers.length;

  if (isDuplicate) {
    throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  }
};

export {
  validateNumbersLength,
  validateNumberRange,
  validateNumberIsDuplicate,
};
