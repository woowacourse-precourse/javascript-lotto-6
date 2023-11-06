export function isNumber(number) {
  if (Number.isNaN(number)) throw new Error('[ERROR] 숫자를 입력해주세요.');
}

export function validateNumber(number) {
  isNumber(number);
  validateNumberBetweenRange(number);
}

export function isThousands(number) {
  if (number % 1000 !== 0)
    throw new Error('[ERROR] 입력값은 1000원 단위입니다.');
}

export function validateArrayLength(arr) {
  if (arr.length !== 6)
    throw new Error('[ERROR] 로또는 6자리 숫자이어야 합니다.');
}
