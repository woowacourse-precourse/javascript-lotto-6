import { ERROR_MESSAGE } from '../modules/constant.js';
import ValidationUtils from '../utils/ValidationUtils.js';

const { checkIsNumber, checkCanDevideByThousand } = ValidationUtils;

class PurchaseMoney {
  #money;
  constructor(money) {
    this.#validatePurchaseMoney(money);
    this.#money = money;
  }

  #validatePurchaseMoney(money) {
    const moneyIsNumber = checkIsNumber(money);
    if (!moneyIsNumber) throw new Error(ERROR_MESSAGE.isNotNumber);

    const moneyIsInThousands = checkCanDevideByThousand(money);
    if (!moneyIsInThousands) throw new Error(ERROR_MESSAGE.isNotInThousands);
  }

  getInsertedMoney() {
    return this.#money;
  }
}

export default PurchaseMoney;
