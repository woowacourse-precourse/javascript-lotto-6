import { SEPARATOR } from "../constants/messages.js";

// 여기에 변환 관련 함수들 모아두기
export function divideIntoCommas(stringInput) {
  return stringInput.split(SEPARATOR);
}

export function stringToNumber(string) {
  return Number(string);
}

export function stringsToNumbers(strings) {
  return strings.map(Number);
}
