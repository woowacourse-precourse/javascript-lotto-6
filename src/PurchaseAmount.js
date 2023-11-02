class PurchaseAmount {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = price;
  }
  
  #validate(price) {
    if (price.length === 0) {
      throw new Error("[ERROR] 금액을 입력해야 합니다.");
    } else if (isNaN(price)) {
      throw new Error("[ERROR] 입력한 값에 문자가 포함되어 있습니다.");
    } else if (price % 1000) {
      throw new Error("[ERROR] 금액은 1000원 단위로 입력되어야 합니다.");
    }
  }
}

export default PurchaseAmount;