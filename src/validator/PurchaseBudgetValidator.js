import Statics from "../static/Statics.js";


class PurchaseBudgetValidator {
  constructor(purchaseBudget) {
    this.purchaseBudget = purchaseBudget
  }

  static validate(purchaseBudget) {
    const validator = new PurchaseBudgetValidator(purchaseBudget);
    validator
      .checkIsNumber()
      .checkHaveEnoughBudget()
      .checkIsMultipleOfLotteryPrice()
      .checkIsNatural();
  }

  checkIsNumber() {
    if (Number.isNaN(Number(this.purchaseBudget))) {
      throw new Error(Statics.message.error.isNotNumber);
    } return this
  }

  checkHaveEnoughBudget() {
    if (Number(this.purchaseBudget) < Statics.lotto.price) {
      throw new Error(Statics.message.error.haveNotEnoughBudget);
    } return this
  }
  
  checkIsMultipleOfLotteryPrice() {
    if (Number(this.purchaseBudget) % Statics.lotto.price !== 0) {
      throw new Error(Statics.message.error.isNotMultipleOfLotteryPrice);
    } return this
  }

  checkIsNatural(){
    if (this.purchaseBudget.trim() !== Number(this.purchaseBudget).toString()) {
			throw new Error(Statics.message.error.isUnNatural);
    } return this
	}
}

export default PurchaseBudgetValidator;