import { Console } from "@woowacourse/mission-utils";
import { PRINT_INPUT } from "./Constant.js";
import { isVaildAmount, isVaildLottoNumbers } from "./checkValidation.js";

const InputPrintout = {
	inputAmount: async () => {
		let amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		if (!isVaildAmount(amount)) {
			amount = await InputPrintout.inputAmount();
		}
		return Number(amount);
	},
	inputLottoNumbers: async () => {
		let numbers = await Console.readLineAsync(PRINT_INPUT.inputNumbers);
		if (!isVaildLottoNumbers(numbers.split(","))) {
			numbers = await InputPrintout.inputLottoNumbers();
		}
		return numbers;
	},
	//보너스번호
};
export default InputPrintout;
