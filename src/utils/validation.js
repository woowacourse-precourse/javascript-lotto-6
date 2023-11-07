function isValidLottoAmountInput(amount) {
  if (isNaN(amount) || amount % 1000 !== 0) {
    return false;
  }

  return true;
}

function isValidLottoWinningNumbersInput(winningNumbers) {
  if (winningNumbers.length !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }

  if (new Set(winningNumbers).size !== 6) {
    throw new Error('[ERROR] 중복되지 않는 6개의 숫자를 뽑아주세요.');
  }

  winningNumbers.forEach((number) => {
    if (isNaN(number)) {
      throw new Error('[ERROR] 빈칸 없이 숫자만 입력해 주세요.');
    }

    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  });

  return true;
}

export { isValidLottoAmountInput, isValidLottoWinningNumbersInput };
