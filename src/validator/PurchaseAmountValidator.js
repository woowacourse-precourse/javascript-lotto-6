import errorMessage from '../constants/errorMessage.js';

class PurchaseAmountValidator {
	validateNumber(purchaseAmount) {
		if (Number.isNaN(purchaseAmount)) {
			throw new Error(errorMessage.NOT_NUMBER);
		}
	}
	
	validateEnoughAmount(purchaseAmount) {
		if (purchaseAmount < 1000) {
			throw new Error(errorMessage.NOT_ENOUGH_PURCHASE_AMOUNT);
		}
	}

	validateValidAmount(purchaseAmount) {
		if (purchaseAmount % 1000 !== 0) {
			throw new Error(errorMessage.INVALID_PURCHASE_AMOUNT);
		}
	}

	static validate(purchaseAmount) {
		const purchaseAmountValidator = new PurchaseAmountValidator();
		purchaseAmountValidator.validateNumber(purchaseAmount);
		purchaseAmountValidator.validateEnoughAmount(purchaseAmount);
		purchaseAmountValidator.validateValidAmount(purchaseAmount);
	}
}
export default PurchaseAmountValidator;
