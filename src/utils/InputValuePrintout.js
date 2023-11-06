import { Console } from "@woowacourse/mission-utils";
import { PRINT_INPUT } from "./Constant.js";

const InputValuePrintout = {
	inputAmount: async () => {
		const amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		if (!isVaildAmount(amount)) await InputValuePrintout.inputAmount();
		return amount;
	},
};
export default InputValuePrintout;
