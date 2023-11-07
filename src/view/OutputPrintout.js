import { Console } from "@woowacourse/mission-utils";
import { PRINT_OUTPUT, NEWLINE } from "../utils/Constant.js";
import {
	countLottos,
	generateLotto,
	generateLottoList,
} from "../controller/lottoController.js";

const OutputPrintout = {
	printLottos: (amount) => {
		const count = countLottos(amount);
		Console.print(`${NEWLINE}${count}${PRINT_OUTPUT.outputLottoCount}`);

		Array.from({ length: count }).forEach(() => {
			const lotto = generateLotto();
			// generateLottoList(lotto);
			Console.print(lotto);
		});
	},
};
export default OutputPrintout;
