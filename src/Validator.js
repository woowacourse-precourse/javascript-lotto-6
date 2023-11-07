export const validateInputMoney = (inputMoney) => {
  if (inputMoney % 1000 !== 0) {
    throw new Error("[ERROR] 로또 구입 가격은 1000원 단위로 입력해야 합니다.");
  }
};
