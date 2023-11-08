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

	winTotal(winRank) {
		Console.print(MESSAGE.WIN_STASTICS);
		Console.print(MESSAGE.DIVISION_LINE);
		Console.print(`${MESSAGE.THD_MATCH}${winRank[4]}개
		${MESSAGE.FRTH_MATCH}${winRank[3]}개
		${MESSAGE.FTH_MATCH}${winRank[2]}개
		${MESSAGE.FTH_BONUS_MATCH}${winRank[1]}개
		${MESSAGE.STH_MATCH}${winRank[0]}개`);
	},
	rateOfReturnPrint(rate) {
		Console.print(`총 수익률은 ${rate}%입니다.`);
	},
}
export default Output;