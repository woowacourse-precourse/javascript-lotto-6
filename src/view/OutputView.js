import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_VIEW_MESSAGE } from '../constants/viewMessage.js';
import Formatting from '../util/Formatting.js';

class OutputView {
	static printNewLine() {
		Console.print('');
	}

	static printPurchaseHistory(lottoNumberList) {
		Console.print(OUTPUT_VIEW_MESSAGE.purchaseHistoryFn(lottoNumberList.length));

		lottoNumberList.forEach(lottoNumber => {
			Console.print(Formatting.convertArrayToString(lottoNumber));
		});
	}

	static printWinningResult(lottoResult, rateOfReturn) {
		Console.print(OUTPUT_VIEW_MESSAGE.winningResult);
		Console.print(OUTPUT_VIEW_MESSAGE.threeDashLine);
		Console.print(OUTPUT_VIEW_MESSAGE.fifthPlaceFn(lottoResult.fifthPlaceCount));
		Console.print(OUTPUT_VIEW_MESSAGE.fourthPlaceFn(lottoResult.fourthPlaceCount));
		Console.print(OUTPUT_VIEW_MESSAGE.thirdPlaceFn(lottoResult.thirdPlaceCount));
		Console.print(OUTPUT_VIEW_MESSAGE.secondPlaceFn(lottoResult.secondPlaceCount));
		Console.print(OUTPUT_VIEW_MESSAGE.firstPlaceFn(lottoResult.firstPlaceCount));
		Console.print(OUTPUT_VIEW_MESSAGE.rateReturnFn(rateOfReturn));
	}

	static printErrorMessage(errorMessage) {
		Console.print(errorMessage);
	}
}

export default OutputView;