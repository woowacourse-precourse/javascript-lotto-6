import { Console } from '@woowacourse/mission-utils';

class Validation {

	/**
	 * 입력한 금액이 1000원 단위인지 확인하는 함수.
	 * @param amount 
	 * @returns isThousand
	 */
	isPurchaseAmountInputValidation(amount) {
		let isThousand = false;
		amount % 1000 != 0 ? isThousand = false : isThousand = true;

		return isThousand;
	}

	/**
	 * 만들어진 로또 번호가 숫자인지 확인하는 함수.
	 * @param numbers
	 * @returns isSafeInteger
	 */
	isSafeInteger = (numbers) => numbers.every(number => Number.isSafeInteger(number));

	/**
	 * 만들어진 로또 번호가 1에서 45 안에 포함되는지 확인하는 함수.
	 * @param numbers
	 * @returns isInRange
	 */
	isInRange = (numbers) => numbers.every(
		(number) => 1 <= number && number <= 45,
	);

	/**
	 * 만들어진 로또 번호가 중복되는지 확인하는 함수.
	 * @param numbers
	 * @returns 
	 */
	isDuplicate = (numbers) => new Set(numbers).size == numbers.length;

	validationList = [
		{
			func: this.isSafeInteger,
			message: LOTTO_NUMBER_INTEGER,
		},
		{
			func: this.isInRange,
			message: LOTTO_NUMBER_RANGE,
		},
		{
			func: this.isDuplicate,
			message: DUPLICATED_NUMBER,
		},
	];

	validate(numbers) {
		const invalidReason = this.validationList.find(factor => !factor.func(numbers));

		if (invalidReason !== undefined) throw new Error(invalidReason.message);

		return true;
	}
}

export default Validation;