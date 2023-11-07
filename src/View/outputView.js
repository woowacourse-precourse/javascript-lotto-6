import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const outputView = {
	printLottoNumbers(amount, lottoNumbers) {
		Console.print(`\n${amount}${OUTPUT_MESSAGE.infoLottoNumbers}`);

		for (let i = 0; i < lottoNumbers.length; i++) {
			Console.print(lottoNumbers[i]);
		}
	},
};

export default outputView;
