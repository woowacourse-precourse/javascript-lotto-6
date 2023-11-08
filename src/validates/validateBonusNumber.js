export default function validateBonusNumber(bonusNumber, winningNumbers) {
  if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수만 가능합니다.");
  }
  if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되어서는 안됩니다.");
  }
  return bonusNumber;
}

