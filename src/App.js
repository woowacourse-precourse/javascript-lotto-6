import Input from './Input.js';
import LottoList from './LottoList.js';
import Output from './Output.js';
import Validator from './Validator.js';
import WinningLotoCounter from './WinningLottoCounter.js';
import ProfitCalculator from './ProfitCalculator.js';
import { ENTER_BONUS_NUMBER, ENTER_BUDGET, ENTER_LOTTO_NUMBERS } from './constant.js';

class App {
	#lottoList;

	#purchaseResult;

	async play() {
		const budget = await this.#getBudget();

		this.#announceLottoList(budget);

		const { winningNumber, bonusNumber } = await this.#getWinningCondition();

		this.#announcePurchaseResult(winningNumber, bonusNumber);

		this.#announceProfitRate(budget);
	}

	#announceLottoList(budget) {
		const lottoListObj = new LottoList(budget);
		this.#lottoList = lottoListObj.getLottoList();
		Output.printLottoList(this.#lottoList);
	}

	#announcePurchaseResult(winningNumber, bonusNumber) {
		const winningLottoCounter = new WinningLotoCounter();

		winningLottoCounter.countWinningLottos(
			this.#lottoList,
			winningNumber,
			bonusNumber,
		);
		this.#purchaseResult = winningLottoCounter.getPurchaseResult();
		Output.printWinningResult(this.#purchaseResult);
	}

	#announceProfitRate(budget) {
		const profitRate = ProfitCalculator.getProfitRate(
			budget,
			this.#purchaseResult,
		);
		Output.printProfitRate(profitRate);
	}

	async #getBudget() {
		const budgetStr = await Input.askUserUntilValid(
			ENTER_BUDGET,
			Validator.checkBudgetValidity,
		);
		const budget = budgetStr * 1;
		return budget;
	}

	async #getWinningCondition() {
		const winningNumber = await Input.askUserUntilValid(
			ENTER_LOTTO_NUMBERS,
			Validator.checkWinningNumberValidity,
		);
		const bonusNumber = await Input.askUserUntilValid(
			ENTER_BONUS_NUMBER,
			Validator.generateBonusNumberValidateFunc(winningNumber),
		);

		return { winningNumber, bonusNumber };
	}
}

export default App;
