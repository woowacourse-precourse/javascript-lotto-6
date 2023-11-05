import ERROR_MESSAGES from '../constants/ErrorMessages.js';
import LOTTO_SYSTEM from '../constants/LottoSystem.js';
import PURCHASE_CONDITIONS from '../constants/PurchaseConditions.js';

const validateCondition = {
	isDigit(value) {
		if (!/^-?\d+$/.test(value)) throw new Error(ERROR_MESSAGES.value_is_not_digit);
	},

	isPositive(value) {
		if (Number(value) <= 0) throw new Error(ERROR_MESSAGES.value_is_not_positive);
	},

	isTotalPriceDivisibleByLottoPrice(value) {
		if (Number(value) % LOTTO_SYSTEM.lotto_price !== 0)
			throw new Error(ERROR_MESSAGES.value_is_indivisible);
	},

	isLottoNumberInRange(value) {
		if (Number(value) < LOTTO_SYSTEM.minimum_number || value > LOTTO_SYSTEM.maximum_number)
			throw new Error(ERROR_MESSAGES.value_is_not_in_range);
	},

	isPurchasePriceExceedMaximumPrice(value) {
		if (Number(value) > PURCHASE_CONDITIONS.maximum_lotto_purchase_price)
			throw new Error(ERROR_MESSAGES.value_is_over_maximum_price);
	},

	checkLottoNumberCount(value) {
		if (value.length !== LOTTO_SYSTEM.lotto_numbers)
			throw new Error(ERROR_MESSAGES.lotto_number_count_not_valid);
	},

	checkDuplicate(value) {
		const uniqueValue = new Set(value);
		if (uniqueValue.size !== value.length) throw new Error(ERROR_MESSAGES.duplicate_value);
	},
};

const validators = {
	checkPurchasePrice(price) {
		validateCondition.isDigit(price);
		validateCondition.isPositive(price);
		validateCondition.isTotalPriceDivisibleByLottoPrice(price);
		validateCondition.isPurchasePriceExceedMaximumPrice(price);
	},

	checkLottoNumbers(numbers) {
		validateCondition.checkDuplicate(numbers);
		validateCondition.checkLottoNumberCount(numbers);

		numbers.forEach((number) => {
			validateCondition.isDigit(number);
			validateCondition.isPositive(number);
			validateCondition.isLottoNumberInRange(number);
		});
	},

	checkWinningBonusNumber(number) {
		validateCondition.isDigit(number);
		validateCondition.isLottoNumberInRange(number);
	},
};

export default validators;
