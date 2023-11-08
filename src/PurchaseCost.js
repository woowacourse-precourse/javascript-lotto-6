import Computer from "../utils/Computer.js";
import { NUMBER } from "../utils/Constant.js";

const ERROR = {
  UNDEFINED_PURCHASECOST: "[ERROR] 금액을 입력해야 합니다.",
  STRING_IN_PURCHASECOST: "[ERROR] 입력한 값에 문자가 포함되어 있습니다.",
  NOT_UNIT_PURCHASECOST: `[ERROR] 금액은 ${NUMBER.UNIT}원 단위로 입력되어야 합니다.`,
};

class PurchaseCost {
  #cost;
  #randomLottoNumbersList;

  constructor(cost) {
    this.#validate(cost);
    this.#cost = cost;
    this.#randomLottoNumbersList = this.#getRandomLottoNumbersList();
  }

  #validate(cost) {
    if (cost.length === 0) {
      throw new Error(ERROR.UNDEFINED_PURCHASECOST);
    } else if (isNaN(cost)) {
      throw new Error(ERROR.STRING_IN_PURCHASECOST);
    } else if (cost % NUMBER.UNIT) {
      throw new Error(ERROR.NOT_UNIT_PURCHASECOST);
    }
  }

  #getRandomLottoNumbersList() {
    const purchaseLottoList = [];
    for (let i = 0; i < parseInt(this.#cost / NUMBER.UNIT); i++) {
      purchaseLottoList.push(Computer.getRandomLottoNumbers());
    }
    return purchaseLottoList;
  }

  getPurchaseCost() {
    return this.#cost;
  }

  getRandomLottoNumbersList() {
    return this.#randomLottoNumbersList;
  }
}

export default PurchaseCost;
