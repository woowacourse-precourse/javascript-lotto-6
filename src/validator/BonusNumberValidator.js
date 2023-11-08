import Statics from "../static/Statics.js";


class BonusNumberValidator {
  constructor(bonusNumber,winningNumber) {
    this.bonusNumber = bonusNumber;
    this.winningNumber = winningNumber;
  }

  static validate(bonusNumber, winningNumber) {
    const validator = new BonusNumberValidator(bonusNumber,winningNumber);
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

	checkIsPicked() {
		if (this.winningNumber.includes(Number(this.bonusNumber))) {
			throw new Error(Statics.message.error.isAlreadyPicked);
		} return this
	}

	validateNaturalNumber(bonusNumber) {
		if (!Number.isInteger(Number(bonusNumber))) {
			throw new Error(errorMessage.NOT_NATURAL_NUMBER);
		}
	}

	validateUnusualCase(bonusNumber) {
		if (bonusNumber !== Number(bonusNumber).toString()) {
			throw new Error(errorMessage.UNUSUAL_INPUT);
		}
	}
}

export default BonusNumberValidator;
