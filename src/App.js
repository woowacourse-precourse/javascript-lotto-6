import Input from './Input.js';
import LottoList from './LottoList.js';
import Output from './Output.js';
import Validator from './Validator.js';
import WinningLotoCounter from './WinningLottoCounter.js';
import ProfitCalculator from './ProfitCalculator.js';

class App {
	#lottoList;

	#winningLottoList;

	#profitCalculator;

	constructor() {
		this.#profitCalculator = ProfitCalculator;
	}

	async play() {
		const budget = await this.#getBudget();

		this.#announceLottoList(budget);

		const { winningNumber, bonusNumber } = await this.#getWinningCondition();

		this.#announceWinningLottoList(winningNumber, bonusNumber);

		this.#announceProfitRate(budget);
	}

	#announceLottoList(budget) {
		const lottoListObj = new LottoList(budget);
		this.#lottoList = lottoListObj.getLottoList();
		Output.printLottoList(this.#lottoList);
	}

	#announceWinningLottoList(winningNumber, bonusNumber) {
		const winningLottoCounter = new WinningLotoCounter();

		winningLottoCounter.countWinningLottos(
			this.#lottoList,
			winningNumber,
			bonusNumber,
		);
		this.#winningLottoList = winningLottoCounter.getWinningLottoList();
		Output.printWinningResult(this.#winningLottoList);
	}

	#announceProfitRate(budget) {
		const profitRate = ProfitCalculator.getProfitRate(
			budget,
			this.#winningLottoList,
		);
		Output.printProfitRate(profitRate);
	}

	async #getBudget() {
		const budgetStr = await Input.askUserUntilValid(
			'구입금액을 입력해 주세요.\n',
			Validator.checkBudgetValidity,
		);
		const budget = budgetStr * 1;
		return budget;
	}

	async #getWinningCondition() {
		const winningNumber = await Input.askUserUntilValid(
			'당첨 번호를 입력해 주세요.\n',
			Validator.checkWinningNumberValidity,
		);
		const bonusNumber = await Input.askUserUntilValid(
			'보너스 번호를 입력해 주세요.\n',
			Validator.generateBonusNumberValidateFunc(winningNumber),
		);

		return { winningNumber, bonusNumber };
	}
}

export default App;
