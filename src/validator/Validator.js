import Statics from "../static/Statics.js";


class Validator {
  constructor(number) {
    this.number = number
  }

  static validatePurchaseBudget(purchaseBudget) {
    const validator = new Validator();
    validator
      .checkIsNumber()
      .checkHaveEnoughBudget()
      .checkIsMultipleOfLotteryPrice()
      .checkIsNatural();
  }

  checkIsNumber() {
    if (Number.isNaN(Number(this.number))) {
      throw new Error(Statics.message.error.isNotNumber);
    } return this
  }

  checkHaveEnoughBudget() {
    if (Number(this.number) < Statics.lotto.price) {
      throw new Error(Statics.message.error.haveNotEnoughBudget);
    } return this
  }
  
  checkIsMultipleOfLotteryPrice() {
    if (Number(this.number) % Statics.lotto.price !== 0) {
      throw new Error(Statics.message.error.isNotMultipleOfLotteryPrice);
    } return this
  }

  checkIsNatural(){
    if (this.number.trim() !== Number(this.number).toString()) {
			throw new Error(Statics.message.error.isUnNatural);
    } return this
	}
}

export default Validator;
