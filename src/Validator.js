import { ERROR, LOTTO } from './constants';
import View from './View';

export const validateNull = (input) => {
	if (!input) throw new Error(ERROR.NO_INPUT);
};
export const validateLength = (arr) => {
	if (arr.length !== LOTTO.LENGTH) throw new Error(ERROR.ONLY_LENGTH_SIX);
};
export const validateIsInteger = (item) => {
	if (!Number.isInteger(item)) throw new Error(ERROR.ONLY_NUMBER);
};
export const validateRange = (item) => {
	if (item >= LOTTO.MIN_NUMBER && item <= LOTTO.MAX_NUMBER) {
		return item;
	}
	throw new Error(ERROR.NUMBER_RANGE);
};
export const validateUnit = (item) => {
	if (item % LOTTO.PRICE !== 0) throw new Error(ERROR.MONEY_UNIT);
};
export const validateDuplicate = (arr) => {
	const set = new Set(arr);
	if (set.size !== arr.length) throw new Error(ERROR.NO_NUMBER_DUPLICATE);
};

export const validateMoney = (item) => {
	// validateNull(item);
	validateIsInteger(+item);
	validateUnit(+item);
	return +item;
};
export const validateArr = (arr) => {
	validateDuplicate(arr);
	validateLength(arr);
	for (const item of arr) {
		validateIsInteger(item);
		validateRange(item);
	}
	return arr;
};
export const validateBonus = (item) => {
	// validateNull(item);
	validateIsInteger(+item);
	validateRange(+item);
	return +item;
};
