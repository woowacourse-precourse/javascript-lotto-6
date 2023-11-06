import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Message";

const Output = {

	purchaseInputMessage() {
		Console.print(MESSAGE.PURCHASE_AMOUNT_MESSAGE);
	},

	lottoAmountMessage(num) {
		Console.print(`${num}${MESSAGE.LOTTO_AMOUNT_MESSAGE}`);
	},

	lottoNumbersPrint(numbers) {
		numbers.forEach(innerArr => {
			Console.print(`[${innerArr.join(',')}]`);
		});
	},

	winNumberInputMessage() {
		Console.print(MESSAGE.WIN_NUMBER_MESSAGE);
	},

	bonusNumberPrint() {
		Console.print(MESSAGE.BONUS_NUMBER_MESSAGE);
	},
}
export default Output;