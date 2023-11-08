class InputBonusValidation {
  constructor(bonus, lottoArr) {
    this.validate(bonus, lottoArr);
    this.price = bonus;
    this.lottoArr = lottoArr // 로또 배열을 전달하여 이 숫자가 로또 숫자와 중복된지 체크
  }
  validate(bonus, lottoArr) {
    if (isNaN(parseInt(bonus))) {
      throw new Error("[ERROR] 숫자를 입력해주세요. ");
    } else if (lottoArr.includes(bonus)) {
      throw new Error("[ERROR] 중복되지 않는 값으로 입력해주세요. ");
    } else if (bonus > 45 || bonus <= 0) {
      throw new Error("[ERROR] 1~45 사이의 수를 입력해주세요. ");
    }
  }
}

export default InputBonusValidation