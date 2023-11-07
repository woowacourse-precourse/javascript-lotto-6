export default class DrawnLottoValidator {
  setting;
  constructor(setting) {
    this.setting = setting;
  }
  // TODO: bonus넘버 1개이상 입력시 에러 추가할것
  validateBonusNumber(numbers, bonusNumber) {
    const convertedBonumNumber = Number(bonusNumber);
    this.#validateBonusNumberDuplicate(numbers, convertedBonumNumber);
    this.#validateRangeOfPlusNumber(convertedBonumNumber);
    return convertedBonumNumber;
  }

  #validateBonusNumberDuplicate(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber))
      throw new LottoError("중복된 숫자가 있습니다.");
  }

  #validateRangeOfPlusNumber(bonusNumber) {
    if (
      bonusNumber < this.setting.NUMBER_RANGE.MIN ||
      bonusNumber > this.setting.NUMBER_RANGE.MAX
    )
      throw new LottoError(
        `로또 번호는 ${this.setting.NUMBER_RANGE.MIN}이상 ${this.setting.NUMBER_RANGE.MAX}이하여야 합니다.`
      );
  }
}
