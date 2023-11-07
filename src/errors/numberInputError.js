const numberInputError = (winningNumbers, bonusNumber) => {
  if (winningNumbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
  if (bonusNumber.length !== 1) {
    throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
  }
};

export default numberInputError;
