class Validation {
  static userMoney(userMoney) {
    if (!+userMoney) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (userMoney % 1000) {
      throw new Error("[ERROR] 1000원 단위로 입금해주세요.");
    }
    if (userMoney < 1000 ) {
      throw new Error("[ERROR] 1000원 이상 입금해주세요.");
    }
  }
}

export default Validation;
