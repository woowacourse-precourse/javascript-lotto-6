import checkNumbersRange from './checkNumbersRange.js';
import isDuplicateNumbers from './isDuplicateNumbers.js';

export function validateAmount(amount) {
  if (/\D/.test(amount)) {
    throw new Error('[ERROR] 로또 구입 금액은 숫자형태로만 입력해야 합니다.');
  } else if (amount < 1000) {
    throw new Error('[ERROR] 로또 구입은 1000원부터 가능합니다.');
  } else if (amount % 1000 !== 0) {
    throw new Error('[ERROR] 로또 구입은 1000원 단위로 가능합니다.');
  }
}

export function validateWinningNumbers(winningNumbers) {
  if (!checkNumbersRange(winningNumbers)) {
    throw new Error(
      '[ERROR] 당첨 번호는 1부터 45까지의 숫자형태로 입력해야 합니다. '
    );
  } else if (winningNumbers.length !== 6) {
    throw new Error('[ERROR] 당첨 번호는 쉼표로 구분해 6개로 입력해야 합니다.');
  } else if (isDuplicateNumbers(winningNumbers)) {
    throw new Error(
      '[ERROR] 당첨 번호는 중복되지 않는 숫자 6개로 입력해야 합니다.'
    );
  }
}

export function validateBonusNumber(winningNumbers, bonusNumber) {
  if (!/^([1-9]|[1-3][0-9]|4[0-5])$/.test(bonusNumber)) {
    throw new Error(
      '[ERROR] 보너스 번호는 1부터 45까지의 숫자 형식으로 입력해야 합니다.'
    );
  } else if (winningNumbers.includes(bonusNumber)) {
    throw new Error(
      '[ERROR] 보너스 번호는 입력한 당첨 번호와 중복되지 않아야 합니다.'
    );
  }
}
