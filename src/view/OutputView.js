import { Console } from '@woowacourse/mission-utils';
import viewMessage from '../constants/viewMessage.js';
import Formatting from '../util/Formatting.js';

class OutputView {
	static printNewLine() {
		Console.print('');
	}

	static printPurchaseHistory(lottoNumberList) {
		Console.print(`${lottoNumberList.length}${viewMessage.OUTPUT_PURCHASE_HISTORY}`);
		lottoNumberList.forEach(lottoNumber => {
			Console.print(Formatting.convertArrayToString(lottoNumber));
		});
	}

	static printWinningResult(lottoResult, rateOfReturn) {
		Console.print(viewMessage.OUTPUT_WINNING_RESULT);
		Console.print(`${viewMessage.OUTPUT_FIFTH_PLACE}${lottoResult.fifthPlaceCount}${viewMessage.OUTPUT_COUNT}`);
		Console.print(`${viewMessage.OUTPUT_FOURTH_PLACE}${lottoResult.fourthPlaceCount}${viewMessage.OUTPUT_COUNT}`);
		Console.print(`${viewMessage.OUTPUT_THIRD_PLACE}${lottoResult.thirdPlaceCount}${viewMessage.OUTPUT_COUNT}`);
		Console.print(`${viewMessage.OUTPUT_SECOND_PLACE}${lottoResult.secondPlaceCount}${viewMessage.OUTPUT_COUNT}`);
		Console.print(`${viewMessage.OUTPUT_FIRST_PLACE}${lottoResult.firstPlaceCount}${viewMessage.OUTPUT_COUNT}`);
		Console.print(`${viewMessage.OUTPUT_RATE_RETURN_PRE}${rateOfReturn}${viewMessage.OUTPUT_RATE_RETURN_POST}`);
	}
}

export default OutputView;