// 여기에 변환 관련 함수들 모아두기
export function devideIntoCommas(stringInput) {
  return stringInput.split(",");
}

export function stringToNumber(string) {
  return Number(string);
}

export function stringsToNumbers(strings) {
  return strings.map(Number);
}
