/**
 * 배열 복사본을 사용하여 콜백 함수를 실행하고 복사본을 반환하는 함수
 * @param {Array} array - 원본 배열
 * @param {Function} callback - 복사본 배열에 적용할 콜백 함수
 * @returns {Array} 변경된 복사본 배열
 */
const withArrayCopy = (array, callback) => {
  const newArray = [...array];
  callback(newArray);
  return newArray;
};

/**
 * 숫자 배열을 복사 후 오름차순으로 정렬하는 함수
 * @param {number[]} numbers - 정렬할 숫자 배열
 * @returns {number[]} 오름차순으로 정렬된 복사 된 숫자 배열
 */
export const ascendingNumbers = (numbers) =>
  withArrayCopy(numbers, (newNumbers) => newNumbers.sort((numberA, numberB) => numberA - numberB));

/**
 * 두 배열의 교집합 요소를 반환하는 함수
 * @param {Array} firstArray - 첫 번째 배열
 * @param {Array} secondArray - 두 번째 배열
 * @returns {Array} 두 배열의 교집합 요소
 */
export const intersection = (firstArray, secondArray) =>
  firstArray.reduce(
    (result, element) =>
      secondArray.includes(element) && !result.includes(element)
        ? [...result, element]
        : [...result],
    [],
  );

/**
 * 배열의 각 요소에 대한 빈도수를 계산하는 함수
 * @param {Array} array - 빈도수를 계산할 배열
 * @param {Function} [callback] - 각 요소를 대표하는 키를 반환하는 콜백 함수
 * @returns {Record<string, number>} 각 요소의 빈도수를 포함한 객체
 */
export const countBy = (array, callback) =>
  array.reduce((hashTable, element) => {
    const key = callback ? callback(element) : element;
    if (!key) return hashTable;
    // eslint-disable-next-line no-param-reassign
    hashTable[key] = (hashTable[key] ?? 0) + 1;
    return hashTable;
  }, {});
