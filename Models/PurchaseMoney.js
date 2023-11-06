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
    if (!moneyIsNumber) throw new Error('[ERROR] 숫자를 입력해주세요.');

    const moneyIsInThousands = checkCanDevideByThousand(money);
    if (!moneyIsInThousands)
      throw new Error('[ERROR] 천원단위로 입력해주세요.');
  }

  getInsertedMoney() {
    return this.#money;
  }
}

export default PurchaseMoney;
