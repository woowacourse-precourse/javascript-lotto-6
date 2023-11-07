export function validAmount(amount) {
  if (!Number(amount)) {
    throw new Error('[ERROR] 로또 구입 금액은 숫자여야 합니다.');
  }
  if (amount < 1000) {
    throw new Error('[ERROR] 로또 구입 금액은 1000원 이상이어야 합니다.');
  }
  if (amount % 1000 !== 0) {
    throw new Error('[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.');
  }
}

export function validBonusNumber(bonusNumber, winningNumber) {
  if (!Number(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error('[ERROR] 보너스 번호는 1~45 사이여야 합니다.');
  }
}
