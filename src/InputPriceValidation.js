class InputPriceValidation {
  constructor(price) {
    this.validate(price);
    this.price = price;
  }
  validate(price) {
    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 1000원으로 나누어지는 값을 입력해주세요. ");
    }
    else if (isNaN(parseInt(price))) {
      throw new Error("[ERROR] 숫자를 입력해주세요. ");
    }
    else if (price <= 0) {
      throw new Error("[ERROR] 1000원 이상의 값을 입력해주세요. ");
    }
  }
  calculateLottoCount(price) {
    return price / 1000;
  }
}

export default InputPriceValidation