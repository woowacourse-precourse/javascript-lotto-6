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
		const isThousand = Validation.isPurchaseAmountInputValidation(purchaseAmount);

		if (!isThousand) throw new Error(ERRORMESSAGE.PURCHASE_AMOUNT_UNIT);

		return purchaseAmount;
	}

	async winNumberInput() {
		Output.winNumberInputMessage();

		const winNumber = await Console.readLineAsync();

		const winNumberArr = winNumber.toString().trim().split(',').map(a => +a);

		Validation.validate(winNumberArr);

		return winNumberArr;
	}

	async bonusNumberInput() {
		Output.bonusNumberPrint();

		const bonusNumber = await Console.readLineAsync();

		if (!Validation.isSafeInteger(bonusNumber)) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_INTEGER);

		if (bonusNumber.length !== 1) throw new Error(ERRORMESSAGE.BONUS_NUMBER_LENGTH);

		return bonusNumber;
	}
}

export default Input;