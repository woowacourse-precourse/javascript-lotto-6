import { Console } from "@woowacourse/mission-utils";
import { PRINT_OUTPUT, NEWLINE } from "../utils/Constant.js";
import LottoController from "../controller/LottoController.js";

const OutputPrintout = {
	printLottos: (amount) => {
		const LottoControll = new LottoController();
		const count = LottoControll.countLottos(amount);
		Console.print(`${NEWLINE}${count}${PRINT_OUTPUT.outputLottoCount}`);

		Array.from({ length: count }).forEach(() => {
			const lotto = LottoControll.generateLotto();
			LottoControll.setLottoList(lotto);
			Console.print(lotto);
		});

		//리스트 저장
		LottoControll.getLottoList().forEach((v) => {
			Console.print(v.getNumbers());
		});
	},
};
export default OutputPrintout;
