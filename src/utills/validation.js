import { Console } from '@woowacourse/mission-utils';
import { ERRORMESSAGE } from '../constants/errorMessage';

class Validation {

	/**
	 * 입력한 금액이 1000원 단위인지 확인하는 함수.
	 * @param amount 
	 * @returns isThousand
	 */


	/**
	 * 만들어진 로또 번호가 숫자인지 확인하는 함수.
	 * @param numbers
	 * @returns isSafeInteger
	 */
	isSafeInteger(numbers) {
		for (let i = 0; i < 6; i++) {
			if (!Number.isSafeInteger(+(numbers[i]))) {
				return false;
			}
		}
		return true;

	};

	/**
	 * 만들어진 로또 번호가 1에서 45 안에 포함되는지 확인하는 함수.
	 * @param numbers
	 * @returns isInRange
	 */
	isInRange = (numbers) => {

		for (let j = 0; j < 6; j++) {
			if (!(1 <= numbers[j] && numbers[j] <= 45)) return false;
		}
		return true;
	};

	/**
	 * 만들어진 로또 번호가 중복되는지 확인하는 함수.
	 * @param numbers
	 * @returns 
	 */
	isDuplicate = (numbers) => {
		if (new Set(numbers).size !== numbers.length) {
			return false;
		};

		return true;
	}
}

export function isValidWinNumber(numbers) {
	const result = new Validation();

	if (!result.isSafeInteger(numbers)) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_INTEGER);

	if (!result.isInRange(numbers)) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_RANGE);

	if (!result.isDuplicate(numbers)) throw new Error(ERRORMESSAGE.DUPLICATED_NUMBER);
}

export function validateLotto(numbers) {
	const result = new Validation();

	if (!result.isSafeInteger(numbers)) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_INTEGER);

	if (!result.isInRange(numbers)) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_RANGE);

	if (!result.isDuplicate(numbers)) throw new Error(ERRORMESSAGE.DUPLICATED_NUMBER);

	if (numbers.length !== 6) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_LENGTH);

	return true;
}

export function isPurchaseAmountInputValidation(amount) {

	if (isNaN(amount)) {
		// throw new Error(ERRORMESSAGE.LOTTO_NUMBER_INTEGER);
		return false;
	}

	if (amount % 1000 !== 0) {
		// throw new Error(ERRORMESSAGE.PURCHASE_AMOUNT_UNIT);
		return false;
	}

	return true;
}

export default Validation;