import { Console } from "@woowacourse/mission-utils";
import { PRINT_OUTPUT, NEWLINE } from "../utils/Constant.js";
import LottoController from "../controller/LottoController.js";

const OutputPrintout = {
	printLottos: (amount) => {
		const count = LottoController.countLottos(amount);
		Console.print(`${NEWLINE}${count}${PRINT_OUTPUT.outputLottoCount}`);

		Array.from({ length: count }).forEach(() => {
			const lotto = LottoController.generateLotto();
			LottoController.setLottoList(lotto);
			Console.print(lotto);
		});
	},
	printWinningRanks: (winningNumber, bonusNumber) => {
		Console.print(PRINT_OUTPUT.outputMatchingNum);
		LottoController.setMatchingNumMap(winningNumber);
		//리스트 출력
		// LottoController.lottoList.forEach((v) => {
		// 	Console.print(v.getNumbers());
		// });
	},
};
export default OutputPrintout;
