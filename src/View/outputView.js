import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const outputView = {
	printLottoNumbers(amount, lottoNumbers) {
		Console.print(`\n${amount}${OUTPUT_MESSAGE.infoLottoNumbers}`);
		Console.print(lottoNumbers);
	},
};

export default outputView;
