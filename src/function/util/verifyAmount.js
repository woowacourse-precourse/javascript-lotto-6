export const verifyAmount = (money) => {

  if (isNaN(money)) {
    throw new Error("[ERROR] 유효한 금액이 아닙니다. 다시 입력 해주세요");
  }

  if (money % 1000 !== 0) {
    throw new Error(
      "[ERROR] 로또는 1000원 단위로 구입이 가능합니다. 금액을 다시 입력해주세요"
    );
  }

  return money;
};
