import { Console } from "@woowacourse/mission-utils";
import { PRINT_INPUT } from "./Constant.js";
import { isVaildAmount } from "./checkValidation.js";

const InputPrintout = {
	inputAmount: async () => {
		const amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		if (!isVaildAmount(amount)) await InputPrintout.inputAmount();
		return amount;
	},
	//당첨번호
	//보너스번호
};
export default InputPrintout;
