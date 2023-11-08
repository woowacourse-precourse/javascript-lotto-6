import InputError from "./InputError.js";
import { PRICE_UNIT } from "./constant/const.js";
class Price {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = price;
  }

  #validate(price) {
    if (isNaN(price)) throw new InputError("숫자를 입력해야 합니다.");
    if (price === 0) throw new InputError("0 또는 빈칸은 입력할 수 없습니다.");
    if (price % PRICE_UNIT !== 0)
      throw new InputError("1,000 단위의 수를 입력해야 합니다.");
  }

  get price() {
    return this.#price;
  }
}

export default Price;
