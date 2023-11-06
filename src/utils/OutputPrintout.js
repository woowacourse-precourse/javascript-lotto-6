import { Console, Random } from "@woowacourse/mission-utils";
import { LOTTO, PRINT_OUTPUT, NEWLINE } from "./Constant.js";

const countLotto = (amount) => Math.floor(amount / LOTTO.cost);

const generateLotto = () => {
	const lottoNumbers = [];
	while (lottoNumbers.length < LOTTO.count) {
		const number = Random.pickNumberInRange(
			LOTTO.minRange,
			LOTTO.maxRange,
			LOTTO.count
		);
		if (!lottoNumbers.includes(number)) {
			lottoNumbers.push(number);
		}
	}
	return lottoNumbers;
};

const OutputPrintout = {
	printLottoCount: (amount) => {
		Console.print(NEWLINE);
		Console.print(`${countLotto(amount)}${PRINT_OUTPUT.outputLottoCount}`);
	},
	printLottos: () => {},
};
export default OutputPrintout;
