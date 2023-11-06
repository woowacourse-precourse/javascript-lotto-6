import { Console } from '@woowacourse/mission-utils';

class Validation {

	/**
	 * 입력한 금액이 1000원 단위인지 확인하는 함수.
	 * @param amount 
	 * @returns isThousand
	 */
	async purchaseAmountInputValidation(amount) {
		let isThousand = true;
		amount % 1000 != 0 ? isThousand = false : isThousand = true;

		return isThousand;
	}
}

export default Validation;