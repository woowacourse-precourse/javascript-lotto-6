import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Message";

const Output = {

	purchaseInputMessage() {
		Console.print(MESSAGE.PURCHASE_AMOUNT_MESSAGE);
	},

	lottoAmountMessage(num) {
		Console.print(`${num}${MESSAGE.LOTTO_AMOUNT_MESSAGE}`);
	},
}
export default Output;