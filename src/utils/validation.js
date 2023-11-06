export function isNumber(number) {
  if (Number.isNaN(number)) throw new Error('[ERROR] 숫자를 입력해주세요.');
}

export function isThousands(number) {
  if (number % 1000 !== 0)
    throw new Error('[ERROR] 입력값은 1000원 단위입니다.');
}
