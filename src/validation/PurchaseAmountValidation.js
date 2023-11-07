const INTEGER_REGEX = /^[-+]?\d+$/

const PurchaseAmount = {

	/**
	 * 구입금액에 대하여 유효성검사를 수행한다.
	 * @param {string} value : 구입금액
	 */
	validate(value) {
		this.checkIsNumeric(value);
		this.checkIsNotNegative(value);
		this.checkIsNotZero(value);
		this.checkIsDivisibleByPrice(value);
	},

	/** @throws 문자열을 정수로 치환할 수 없으면 에러를 발생시킨다. */
	checkIsNumeric(value) {
		if (!INTEGER_REGEX.test(value)) {
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

	/** @throws */
	checkIsDivisibleByPrice(value) {
		if (Number(value) % 1000 !== 0) {
      // TODO: 에러메시지
			throw new Error('in checkIsDivisibleByPrice');
		}
	}
}

export default PurchaseAmount;
