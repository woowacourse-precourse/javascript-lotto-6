import LOTTO_SYSTEM from '../constants/LottoSystem.js';

class BudgetManager {
	#initalAmount;
	#currentAmount;

	constructor(amount) {
		this.#initalAmount = Number(amount);
		this.#currentAmount = Number(amount);
	}

	buyingLottos() {
		const purchasedLottoCount = this.#currentAmount / LOTTO_SYSTEM.lotto_price;
		this.#currentAmount = this.#currentAmount % LOTTO_SYSTEM.lotto_price;

		return purchasedLottoCount;
	}
}

export default BudgetManager;
