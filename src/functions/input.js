import { Console } from '@woowacourse/mission-utils';
import Validation, { isPurchaseAmountInputValidation, isValidWinNumber } from '../utills/validation';
import { ERRORMESSAGE } from '../constants/errorMessage';
import Output from './output';


/**
 * 로또를 구입할 금액을 입력받는 함수.
 * 만약
 * @param  
 * @returns isThousand
 */
export async function purchaseAmountInput() {
	Output.purchaseInputMessage();

	let purchaseAmount = await Console.readLineAsync();

	if (!isPurchaseAmountInputValidation(+purchaseAmount)) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_INTEGER);

	return +purchaseAmount;
};

export async function winNumberInput() {
	Output.winNumberInputMessage();

	const winNumber = await Console.readLineAsync();

	const winNumberArr = winNumber.toString().trim().split(',').map(a => +a);

	isValidWinNumber(winNumberArr);

	return winNumberArr;
}

export async function bonusNumberInput() {
	Output.bonusNumberPrint();

	const bonus = await Console.readLineAsync();
	let bonusNumber = +bonus;

	if (!Number.isSafeInteger(bonusNumber)) throw new Error(ERRORMESSAGE.LOTTO_NUMBER_INTEGER);

	// if (bonusNumber.length !== 1) throw new Error(ERRORMESSAGE.BONUS_NUMBER_LENGTH);

	return bonusNumber;
}

