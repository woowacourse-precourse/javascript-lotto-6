const bonusNumberError = (winningNumbers, bonusNumber) => {
  bonusNumber = parseInt(bonusNumber);
  if (isNaN(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 보너스 번호는 1~45 사이여야 합니다.");
  }
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  }
};

export default bonusNumberError;
