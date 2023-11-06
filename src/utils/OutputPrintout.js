import { Console, Random } from "@woowacourse/mission-utils";
import { LOTTO, PRINT_OUTPUT, NEWLINE } from "./Constant.js";
import Lotto from "../Lotto.js";

const countLottos = (amount) => Math.floor(amount / LOTTO.cost);

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
	return lottoNumbers.sort((a, b) => a - b);
};

const OutputPrintout = {
	printLottos: (amount) => {
		const count = countLottos(amount);
		Console.print(NEWLINE);
		Console.print(`${count}${PRINT_OUTPUT.outputLottoCount}`);

		Array.from({ length: count }).forEach(() => {
			const lottos = generateLotto(); // 나중에 어딘가에 저장
			Console.print(lottos);
		});
	},
};
export default OutputPrintout;
