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
