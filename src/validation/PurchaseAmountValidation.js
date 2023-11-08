const PurchaseAmountValidation = {

	/**
	 * 구입금액에 대하여 유효성검사를 수행한다.
	 * @param {string} value 구입 금액
	 */
	validate(value) {
		this.checkIsNumeric(value);
		this.checkIsInteger(value);
		this.checkIsNotNegative(value);
		this.checkIsNotZero(value);
		this.checkIsDivisibleByPrice(value);
	},

	/** @throws 숫자로 치환할 수 없으면 에러를 발생시킨다. */
	checkIsNumeric(value) {
		if (isNaN(value)) {
			// TODO: 에러메시지
			throw new Error('in checkIsNumeric');
		}
	},

	/** @throws 정수가 아니라면 에러를 발생시킨다. */
	checkIsInteger(value) {
		if (!Number.isInteger(Number(value))) {
			// TODO: 에러메시지
			throw new Error('in checkIsNumeric');
		}
	},

	/** @throws 문자열이 음수를 나타내면 에러를 발생시킨다. */
	checkIsNotNegative(value) {
		if (Number(value) < 0) {
			// TODO: 에러메시지
			throw new Error('in checkIsNotNegative');
		}
	},

	/** @throws 문자열이 0을 나타내면 에러를 발생시킨다. */
	checkIsNotZero(value) {
		if (Number(value) === 0) {
			// TODO: 에러메시지
			throw new Error('in checkIsNotZero');
		}
	},

	/** @throws 문자열이 price로 나누어 떨어지지 않으면 에러를 발생시킨다. */
	checkIsDivisibleByPrice(value) {
		if (Number(value) % 1000 !== 0) {
			// TODO: 에러메시지
			throw new Error('in checkIsDivisibleByPrice');
		}
	}
}

export default PurchaseAmountValidation;
