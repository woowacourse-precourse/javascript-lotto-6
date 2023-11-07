class BonusNumberValidity {
  inputNumberValidity(inputNumber, inputNumberArray) {
    this.numberNaNvalidity(inputNumber);
    this.numberRangeValidity(inputNumber);
    this.numberDuplicateValidity(inputNumber, inputNumberArray);
  }

  numberNaNvalidity(inputNumber) {
    if (isNaN(inputNumber)) {
      throw new Error("[ERROR] 숫자를 입력하시오.");
    }
  }

  numberRangeValidity(inputNumber) {
    if (inputNumber < 1) {
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력하시오.");
    }
    if (inputNumber > 45) {
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력하시오.");
    }
  }

  numberDuplicateValidity(inputNumber, inputNumberArray) {
    if (inputNumberArray.includes(inputNumber)) {
      throw new Error("[ERROR] 당첨 번호와 중복되지 않은 숫자를 입력하시오.");
    }
  }
}

export default BonusNumberValidity;
