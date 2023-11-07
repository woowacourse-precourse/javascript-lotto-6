export function validateAmountInput(input) {
  if (input === '') {
    throw new Error('[ERROR] 입력값이 없습니다.');
  }

  if (isNaN(input)) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  if (input % 1000 !== 0 || input < 1000) {
    throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');
  }
}

export function validateWinningInput(input) {
  if (input === '') {
    throw new Error('[ERROR] 입력값이 없습니다.');
  }

  const numbers = input.split(',');

  if (input.split(',').length !== 6) {
    throw new Error('[ERROR] 6개의 번호를 입력해주세요.');
  }

  if (new Set(numbers).size !== numbers.length) {
    throw new Error('[ERROR] 중복된 숫자가 있습니다.');
  }

  if (numbers.some((num) => num < 1 || num > 45)) {
    throw new Error('[ERROR] 1~45 사이의 숫자여야 합니다.');
  }
}

export function validateBonusInput(input, winningInfo) {
  if (winningInfo.split(',').includes(input)) {
    throw new Error('[ERROR] 당첨 번호에 이미 있는 숫자입니다.');
  }

  if (input < 1 || input > 45) {
    throw new Error('[ERROR] 1~45 사이의 숫자여야 합니다.');
  }
}
