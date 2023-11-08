export const validateInputMoney = (inputMoney) => {
  if (inputMoney % 1000 !== 0) {
    throw new Error("[ERROR] 로또 구입 가격은 1000원 단위로 입력해야 합니다.");
  }
};

export const validateBonusNumber = (bonusNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
  }

  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.");
  }
};
