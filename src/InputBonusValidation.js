const ERROR_MESSAGE = {
  NAN_ERROR: "[ERROR] 숫자를 입력해주세요. ",
  DUPLICATE_ERROR: "[ERROR] 중복되지 않는 값으로 입력해주세요. ",
  RANGE_ERROR: "[ERROR] 1~45 사이의 수를 입력해주세요. "
}

const RANGE = {
  START: 0,
  END: 45
}

class InputBonusValidation {
  constructor(bonus, lottoArr) {
    this.validate(bonus, lottoArr);
    this.price = bonus;
    this.lottoArr = lottoArr // 로또 배열을 전달하여 이 숫자가 로또 숫자와 중복된지 체크
  }
  validate(bonus, lottoArr) {
    if (isNaN(parseInt(bonus))) {
      throw new Error(ERROR_MESSAGE.NAN_ERROR);
    } else if (lottoArr.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
    } else if (bonus > RANGE.END || bonus <= RANGE.START) {
      throw new Error(ERROR_MESSAGE.RANGE_ERROR);
    }
  }
}

export default InputBonusValidation