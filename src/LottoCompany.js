import LottoBuyer from './LottoBuyer.js';
import PurchaseAmountValidator from './Validator/purchaseAmountValidator.js';
import CheckLotto from './util/CheckLotto.js';
import Formatting from './util/Formatting.js';
import BonusNumberValidator from './validator/BonusNumberValidator.js';
import WinningNumberArrayValidator from './validator/WinningNumberArrayValidator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class LottoCompany {
	#winningNumberArray;
	#bonusNumber;
	#lottoBuyer;

	async #getPurchaseAmountFromUser() {
		const purchaseAmount = await InputView.inputPurchaseAmountAsync();
		PurchaseAmountValidator.validate(purchaseAmount);
		return Number(purchaseAmount);
	}

	async #getWinningNumberArrayFromUser() {
		const winningNumberArray = await InputView.inputWinningNumbersAsync();
		WinningNumberArrayValidator.validate(winningNumberArray);
		return winningNumberArray.split(',').map(Number);
	}

	async #getBonusNumberFromUser() {
		const bonusNumber = await InputView.inputBonusNumberAsync();
		BonusNumberValidator.validate(bonusNumber, this.#winningNumberArray);
		return Number(bonusNumber);
	}

	async publishLottos() {
		let isPublished = false;
		do {
			try {
				this.#lottoBuyer = new LottoBuyer(await this.#getPurchaseAmountFromUser());
				OutputView.printNewLine();
				OutputView.printPurchaseHistory(this.#lottoBuyer.getAllLottoNumberArray());
				OutputView.printNewLine();
				isPublished = true;
			} catch (error) {
				OutputView.printErrorMessage(error.message);
			}
		} while (!isPublished);
	}

	async drawWinningNumberArray() {
		let isDrawn = false;
		do {
			try {
				this.#winningNumberArray = await this.#getWinningNumberArrayFromUser();
				OutputView.printNewLine();
				isDrawn = true;
			} catch (error) {
				OutputView.printErrorMessage(error.message);
			}
		} while (!isDrawn);
	}

	async drawBonusNumber() {
		let isDrawn = false;
		do {
			try {
				this.#bonusNumber = await this.#getBonusNumberFromUser();
				OutputView.printNewLine();
				isDrawn = true;
			} catch (error) {
				OutputView.printErrorMessage(error.message);
			}
		} while (!isDrawn);
	}

	announceResult() {
		const purchaseAmount = this.#lottoBuyer.getPurchaseAmount();
		const lottoResult = this.#lottoBuyer.checkResult(this.#winningNumberArray, this.#bonusNumber);
		OutputView.printWinningResult(lottoResult, Formatting.insertCommasByThousandUnits(CheckLotto.calculateRateOfReturn(purchaseAmount, lottoResult)));
	}

	async operate() {
		await this.publishLottos();
		await this.drawWinningNumberArray();
		await this.drawBonusNumber();
		this.announceResult();
	}
}

export default LottoCompany;