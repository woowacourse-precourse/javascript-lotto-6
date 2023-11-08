import Statics from "../static/Statics.js";


class BonusNumberValidator {
  constructor(bonusNumber,winningNumber) {
    this.bonusNumber = bonusNumber;
    this.winningNumber = winningNumber;
  }

  static validate(bonusNumber, winningNumber) {
    const validator = new BonusNumberValidator(bonusNumber,winningNumber);
    validator.checkIsNumber()
      .checkIsInRange()
      .checkIsUsual()
      .checkIsNatural()
      .checkIsPicked()
  }

  checkIsNumber() {
		if (isNaN(this.bonusNumber)) {
			throw new Error(Statics.message.error.isNotNumber);
    } return this
	}

  checkIsInRange() {
		if (Number(this.bonusNumber) < Statics.lotto.low || Number(this.bonusNumber) > Statics.lotto.high) {
			throw new Error(Statics.message.error.isOutOfRange);
		} return this
	}

	checkIsNatural() {
		if (!(Number.isInteger(Number(this.bonusNumber)))) {
			throw new Error(Statics.message.error.isUnNatural);
		} return this
	}

	checkIsUsual() {
		if (this.bonusNumber !== Number(this.bonusNumber).toString()) {
			throw new Error(Statics.message.error.isUnNatural);
		} return this
  }
  
	checkIsPicked() {
		if (this.winningNumber.includes(Number(this.bonusNumber))) {
			throw new Error(Statics.message.error.isAlreadyPicked);
		} return this
	}
}

export default BonusNumberValidator;
