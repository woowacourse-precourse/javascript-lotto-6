class PurchaseCost {
  #cost;

  constructor(cost) {
    this.#validate(cost);
    this.#cost = cost;
  }
  
  #validate(cost) {
    if (cost.length === 0) {
      throw new Error("[ERROR] 금액을 입력해야 합니다.");
    } else if (isNaN(cost)) {
      throw new Error("[ERROR] 입력한 값에 문자가 포함되어 있습니다.");
    } else if (cost % 1000) {
      throw new Error("[ERROR] 금액은 1000원 단위로 입력되어야 합니다.");
    }
  }
}

export default PurchaseCost;