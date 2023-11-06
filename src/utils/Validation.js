import { LOTTO } from "../constants/Standard.js";

function isOnlyNumber(string) {
  // 입력: 문자열, 출력: boolean
  if (string.length === 0) {
    return true;
  }
  return /^[0-9]+$/.test(string);
}

function isInRangeNumber(numbers) {
  // 입력: 숫자를 인수로 가지는 배열, 출력: boolean
  return numbers.every(
    (number) => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER
  );
}

export { isOnlyNumber, isInRangeNumber };
