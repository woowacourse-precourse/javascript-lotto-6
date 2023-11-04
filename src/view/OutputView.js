import { Console } from '@woowacourse/mission-utils';
import viewMessage from '../constants/viewMessage.js';
import Formatting from '../util/Formatting.js';

class OutputView {
	static printNewLine() {
		Console.print('');
	}

	static printPurchaseHistory(lottoNumberList) {
		Console.print(viewMessage.OUTPUT_PURCHASE_HISTORY(lottoNumberList.length));
		lottoNumberList.forEach(lottoNumber => {
			Console.print(Formatting.convertArrayToString(lottoNumber));
		});
	}

	static printWinningResult(lottoResult, rateOfReturn) {
		Console.print(viewMessage.OUTPUT_WINNING_RESULT);
		Console.print(viewMessage.OUTPUT_FIFTH_PLACE(lottoResult.fifthPlaceCount));
		Console.print(viewMessage.OUTPUT_FOURTH_PLACE(lottoResult.fourthPlaceCount));
		Console.print(viewMessage.OUTPUT_THIRD_PLACE(lottoResult.thirdPlaceCount));
		Console.print(viewMessage.OUTPUT_SECOND_PLACE(lottoResult.secondPlaceCount));
		Console.print(viewMessage.OUTPUT_FIRST_PLACE(lottoResult.firstPlaceCount));
		Console.print(viewMessage.OUTPUT_RATE_RETURN(rateOfReturn));
	}

	static printErrorMessage(errorMessage) {
		Console.print(errorMessage);
	}
}

export default OutputView;