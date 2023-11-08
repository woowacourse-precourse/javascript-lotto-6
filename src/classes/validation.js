class Validation {
  static userMoney(userMoney) {
    if (!+userMoney) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (userMoney % 1000) {
      throw new Error("[ERROR] 1000원 단위로 입금해주세요.");
    }
    if (userMoney < 1000) {
      throw new Error("[ERROR] 1000원 이상 입금해주세요.");
    }
  }

  static winningNumber(numbers) {
    const numberArray = numbers.split(",");
    if (numberArray.length !== 6) {
      throw new Error("[ERROR] 6자리를 입력해주세요.");
    }
    numberArray.forEach((number) => {
      if (!+number) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
      }
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1~45 내의 숫자를 입력해주세요.");
      }
    });
  }

  static bonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 당첨 번호와 다른 번호를 입력하세요.");
    }
    if (!+bonusNumber) {
      throw new Error("[ERROR] 숫자를 입력하세요.");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 1~45 내의 숫자를 입력해주세요.");
    }
  }
}

export default Validation;
