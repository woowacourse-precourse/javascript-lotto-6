import Statics from "../static/Statics.js";

class WinningNumberValidator {
  constructor(winningNumber) {
    this.winningNumber = winningNumber
  }

  static validate(winningNumber) {
    const validator = new WinningNumberValidator(winningNumber);
    validator
      .checkIsNumber()
      .checkIsLengthMatched()
      .checkAreNumbersUnique()
      .checkIsInRange()
      .checkIsNatural()
      .checkIsUsual()
  }

  checkIsNumber() {
    this.winningNumber.map(number => {
      if (Number.isNaN(Number(number))) {
        throw new Error(Statics.message.error.isNotNumber);
      }
    });
    return this;
	}

	checkIsLengthMatched() {
		if (this.winningNumber.length !== 6) {
			throw new Error(Statics.message.error.isNotMatchWithDigit);
		} return this
	}

	checkAreNumbersUnique() {
		if (this.winningNumber.length !== (new Set(this.winningNumber)).size) {
			throw new Error(Statics.message.error.areNotUnique);
		} return this
	}

	checkIsInRange() {
    this.winningNumber.map(number => {
			if (Number(number) < Statics.lotto.low || Number(number) > Statics.lotto.high) {
				throw new Error(Statics.message.error.isOutOfRange);
      }
		});
    return this;
	}

	checkIsNatural() {
		this.winningNumber.map(number => {
			if (!Number.isInteger(Number(number))) {
				throw new Error(Statics.message.error.isUnNatural);
			}
    });
    return this;
	}
	
	checkIsUsual() {
		this.winningNumber.map(number => {
			if (number !== Number(number).toString()) {
				throw new Error(Statics.message.error.isUnNatural);
			}
    });
    return this
	}
}

export default WinningNumberValidator;