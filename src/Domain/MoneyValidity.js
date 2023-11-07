class MoneyValidity {
  inputMoneyValidity(money) {
    if (money % 1000 != 0) {
      throw new Error("[ERROR] 1000원 단위의 숫자를 입력하시오.");
    }
  }
}

export default MoneyValidity;
