import { Console } from "@woowacourse/mission-utils";
import { PRINT_INPUT } from "../utils/Constant.js";
import { isVaildAmount, isVaildBonusNum } from "../utils/checkValidation.js";
import Lotto from "../model/Lotto.js";

const InputPrintout = {
	isInvaildInput: true,
	inputAmount: async () => {
		let amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
		// console.log("입력값", amount);
		while (InputPrintout.isInvaildInput) {
			try {
				InputPrintout.isInvaildInput = false;
				isVaildAmount(amount);
			} catch (error) {
				Console.print(error.toString());
				InputPrintout.isInvaildInput = true;
				amount = await Console.readLineAsync(PRINT_INPUT.inputAmount);
			}
		}
		InputPrintout.isInvaildInput = true;
		return Number(amount);
	},
	inputLottoNumbers: async () => {
		let numbers = await Console.readLineAsync(PRINT_INPUT.inputNumbers);
		while (InputPrintout.isInvaildInput) {
			try {
				InputPrintout.isInvaildInput = false;
				new Lotto(numbers);
			} catch (error) {
				Console.print(error.toString());
				InputPrintout.isInvaildInput = true;
				numbers = await Console.readLineAsync(PRINT_INPUT.inputNumbers);
			}
		}
		InputPrintout.isInvaildInput = true;
		return new Lotto(numbers);
	},
	inputBonusNum: async (winningNumber) => {
		let bonus = await Console.readLineAsync(PRINT_INPUT.inputBonusNum);
		while (InputPrintout.isInvaildInput) {
			try {
				InputPrintout.isInvaildInput = false;
				isVaildBonusNum(bonus, winningNumber);
			} catch (error) {
				Console.print(error.toString());
				InputPrintout.isInvaildInput = true;
				bonus = await Console.readLineAsync(PRINT_INPUT.inputBonusNum);
			}
		}
		InputPrintout.isInvaildInput = true;
		return bonus;
	},
};
export default InputPrintout;
