import PrintConsole from '../views/PrintConsole.js';
import UserInput from '../views/UserInput.js';
import BudgetManager from '../models/BudgetManager.js';
import LottoManager from '../models/LottoManager.js';

class LottoController {
	#printConsole;
	#userInput;
	#budgetManager;
	#lottoManager;

	constructor() {
		this.#printConsole = new PrintConsole();
		this.#userInput = new UserInput();
	}

	async purchasingLottos() {
		const amount = await this.#userInput.lottoPurchase();

		this.#budgetManager = new BudgetManager(amount);
		const purchasedLottoCount = this.#budgetManager.buyingLottos();

		this.#lottoManager = new LottoManager(purchasedLottoCount);
		this.#printConsole.showLottoNumbers(this.#lottoManager.getLottosNumbers());
	}
}

export default LottoController;
