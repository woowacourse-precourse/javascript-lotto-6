const ERROR_MESSAGE = {
  DIVIDE_ERROR: "[ERROR] 숫자를 입력해주세요. ",
  NAN_ERROR: "[ERROR] 중복되지 않는 값으로 입력해주세요. ",
  RANGE_ERROR: "[ERROR] 1~45 사이의 수를 입력해주세요. "
}

const NUMBER = {
  DIVIDE: 1000,
  NUMBER_ZERO: 0
}

class InputPriceValidation {
  constructor(price) {
    this.validate(price);
    this.price = price;
  }
  validate(price) {
    if (price % NUMBER.DIVIDE !== NUMBER.NUMBER_ZERO) {
      throw new Error(ERROR_MESSAGE.DIVIDE_ERROR);
    }
    else if (isNaN(parseInt(price))) {
      throw new Error(ERROR_MESSAGE.NAN_ERROR);
    }
    else if (price <= NUMBER.NUMBER_ZERO) {
      throw new Error(ERROR_MESSAGE.RANGE_ERROR);
    }
  }
  calculateLottoCount(price) {
    return price / NUMBER.DIVIDE;
  }
}

export default InputPriceValidation