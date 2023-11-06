import { Console } from "@woowacourse/mission-utils";
import { PRINT_INPUT } from "./Constant.js";

const InputValuePrintout = {
	inputAmount: async () => {
		const amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		// 유효성 검사 추가
		return amount;
	},
};
export default InputValuePrintout;
