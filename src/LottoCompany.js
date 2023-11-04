import LottoBuyer from './LottoBuyer.js';
import PurchaseAmountValidator from './Validator/purchaseAmountValidator.js';
import CheckLotto from './util/CheckLotto.js';
import Formatting from './util/Formatting.js';
import BonusNumberValidator from './validator/BonusNumberValidator.js';
import winningNumberArrayValidator from './validator/WinningNumberArrayValidator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

class LottoCompany {
	#winningNumberArray;
	#bonusNumber;
	#lottoBuyer;
	
	async #getPurchaseAmountFromUser() {
		const purchaseAmount = Number(await InputView.inputPurchaseAmountAsync());
		PurchaseAmountValidator.validate(purchaseAmount);
		return purchaseAmount;
	}

	async #getWinningNumberArrayFromUser() {
		const winningNumberArray = (await InputView.inputWinningNumbersAsync()).split(',').map(Number);
		winningNumberArrayValidator.validate(winningNumberArray);
		return winningNumberArray;
	}

	async #getBonusNumberFromUser() {
		const bonusNumber = Number(await InputView.inputBonusNumberAsync());
		BonusNumberValidator.validate(bonusNumber, this.#winningNumberArray);
		return bonusNumber;
	}
}

export default LottoCompany;