import { Console } from '@woowacourse/mission-utils';
import Validation from '../utills/validation';
import { ERRORMESSAGE } from '../constants/errorMessage';
import Output from './output';


class Input {
	/**
	 * 로또를 구입할 금액을 입력받는 함수.
	 * 만약
	 * @param  
	 * @returns isThousand
	 */
	async purchaseAmountInput() {
		Output.purchaseInputMessage();

		const purchaseAmount = await Console.readLineAsync();
		const isThousand = Validation.purchaseAmountInputValidation(purchaseAmount);

		if (!isThousand) throw new Error(ERRORMESSAGE.PURCHASE_AMOUNT_UNIT);

		return purchaseAmount;
	}

}

export default Input;