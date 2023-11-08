import { UNIT, MIN, MAX, COUNT } from '../constants.js';

const isValidLottoAmountInput = (amount) => {
  if (isNaN(amount) || amount % UNIT !== 0) {
    return false;
  }

  return true;
};

const isValidLottoWinningNumbersInput = (winningNumbers) => {
  if (winningNumbers.length !== COUNT) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }

  if (new Set(winningNumbers).size !== COUNT) {
    throw new Error('[ERROR] 중복되지 않는 6개의 숫자를 뽑아주세요.');
  }

  winningNumbers.forEach((number) => {
    if (isNaN(number)) {
      throw new Error('[ERROR] 빈칸 없이 숫자만 입력해 주세요.');
    }

    if (number < MIN || number > MAX) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  });

  return true;
};

const isValidLottoBonusNumberInput = (winningNumbers, lottoBonusNumber) => {
  if (isNaN(lottoBonusNumber)) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  if (winningNumbers.includes(lottoBonusNumber)) {
    throw new Error(
      '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.'
    );
  }
};

export {
  isValidLottoAmountInput,
  isValidLottoWinningNumbersInput,
  isValidLottoBonusNumberInput,
};
