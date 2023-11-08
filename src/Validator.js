import { ERROR, LOTTO } from './constants';
class Validator {
	static validateMoney(item) {
		// this.validateNull(item);
		this.validateIsInteger(+item);
		this.validateUnit(+item);
		return +item;
	}
	static validateArr(arr) {
		this.validateLength(arr);
		arr.forEach((item) => this.validateIsInteger(+item));
		arr.forEach((item) => this.validateRange(+item));
		this.validateDuplicate(arr);
		return arr;
	}
	static validateBonus(item) {
		// this.validateNull(item);
		this.validateIsInteger(+item);
		this.validateRange(+item);
		return +item;
	}
	static validateNull(input) {
		if (!input) throw new Error(ERROR.NO_INPUT);
	}
	static validateLength(arr) {
		if (arr.length !== LOTTO.LENGTH) throw new Error(ERROR.ONLY_LENGTH_SIX);
	}
	static validateIsInteger(item) {
		if (Number.isInteger(item)) {
			return item;
		}
		throw new Error(ERROR.ONLY_NUMBER);
	}
	static validateRange(item) {
		if (item >= LOTTO.MIN_NUMBER && item <= LOTTO.MAX_NUMBER) {
			return item;
		}
		throw new Error(ERROR.NUMBER_RANGE);
	}
	static validateUnit(item) {
		if (item % LOTTO.PRICE !== 0) throw new Error(ERROR.MONEY_UNIT);
	}
	static validateDuplicate(arr) {
		const set = new Set(arr);
		if (set.size !== arr.length) throw new Error(ERROR.NO_NUMBER_DUPLICATE);
	}
}

export default Validator;
