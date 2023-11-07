import { Console } from "@woowacourse/mission-utils";
import { PRINT_INPUT } from "./Constant.js";
import { isVaildAmount, isVaildLottoNumbers } from "./checkValidation.js";
import Lotto from "../Lotto.js";

const InputPrintout = {
	inputAmount: async () => {
		let amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		while (!isVaildAmount(amount)) {
			amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		}
		return Number(amount);
	},
	inputLottoNumbers: async () => {
		let numbers = await Console.readLineAsync(PRINT_INPUT.inputNumbers);
		let isInvaildInput = true;
		while (isInvaildInput) {
			try {
				isInvaildInput = false;
				new Lotto(numbers);
			} catch (error) {
				isInvaildInput = true;
				Console.print(error);
				numbers = await Console.readLineAsync(PRINT_INPUT.inputNumbers);
			}
		}
		return numbers;
	},
	//보너스번호
};
export default InputPrintout;
