export default function validateBonusNumber(bonusNumber, winningNumbers) {
  const minNumber = 1;
  const maxNumber = 45;

  if (!Number.isInteger(bonusNumber)) {
      throw new Error("[ERROR] 로또 번호는 정수만 가능합니다.");
  }

  if (bonusNumber < minNumber || bonusNumber > maxNumber) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }

  if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되어서는 안됩니다.");
  }

  return bonusNumber;
}
