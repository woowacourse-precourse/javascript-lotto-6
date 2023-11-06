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

	calculateLotteryResults(lottoResults) {
		const totalMatchedNumbers = [];

		lottoResults.forEach((result) => {
			LOTTO_SYSTEM.winning_array.forEach((winning, idx) => {
				if (winning.count === result.winningCount) {
					if (winning.hasBonus && !result.bonusNumberHit) return;
					totalMatchedNumbers.push(idx);
					this.#currentAmount += LOTTO_SYSTEM.prize_array[idx];
				}
			});
		});

		return totalMatchedNumbers;
	}
}

export default BudgetManager;
