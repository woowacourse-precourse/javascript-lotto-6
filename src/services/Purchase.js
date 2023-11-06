import inputs from "../domains/inputs.js";
import MESSAGE from "../constants/message.js";
import CONDITION from "../constants/condition.js";

class Purchase {
  #price;

  // 로또 구입 금액 입력
  async inputPrice() {
    this.#price = await inputs.inputPrice();
    this.#validate(this.#price);
    return Number(this.#price);
  }

  #validate(price) {
    // 숫자가 아닌 경우
    if (isNaN(price)) {
      throw new Error(MESSAGE.error.notNumber);
    }
    // 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우
    if (price % CONDITION.unit.price !== 0) {
      throw new Error(MESSAGE.error.priceUnit);
    }
  }
}

export default Purchase;
