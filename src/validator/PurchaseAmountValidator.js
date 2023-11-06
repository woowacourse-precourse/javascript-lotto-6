import errorMessage from '../constants/errorMessage.js';

class PurchaseAmountValidator {
	validateNumber(purchaseAmount) {
		if (Number.isNaN(Number(purchaseAmount))) {
			throw new Error(errorMessage.NOT_NUMBER);
		}
	}

	validateEnoughAmount(purchaseAmount) {
		if (Number(purchaseAmount) < 1000) {
			throw new Error(errorMessage.NOT_ENOUGH_PURCHASE_AMOUNT);
		}
	}

	validateNoChangeRemaining(purchaseAmount) {
		if (Number(purchaseAmount) % 1000 !== 0) {
			throw new Error(errorMessage.INVALID_PURCHASE_AMOUNT);
		}
	}

	validateUnusualCase(purchaseAmount) {
		if (purchaseAmount.trim() !== Number(purchaseAmount).toString()) {
			throw new Error(errorMessage.UNUSUAL_INPUT);
		}
	}

	static validate(purchaseAmount) {
		const purchaseAmountValidator = new PurchaseAmountValidator();
		purchaseAmountValidator.validateNumber(purchaseAmount);
		purchaseAmountValidator.validateEnoughAmount(purchaseAmount);
		purchaseAmountValidator.validateNoChangeRemaining(purchaseAmount);
		purchaseAmountValidator.validateUnusualCase(purchaseAmount);
	}
}

export default PurchaseAmountValidator;