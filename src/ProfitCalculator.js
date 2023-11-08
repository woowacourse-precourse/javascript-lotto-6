class ProfitCalculator {
	static getProfitRate(budget, purchaseResult) {
		const totalWinnings = ProfitCalculator.sumTotalWinnings(purchaseResult);

		const profitRate = (totalWinnings / budget) * 100;

		return ProfitCalculator.formatProfitRate(profitRate);
	}

	static formatProfitRate(number) {
		return `${number.toFixed(1)}%`;
	}

	static sumTotalWinnings(purchaseResult) {
		return purchaseResult.reduce((sum, winningLotto) => {
			const { winnings } =
				winningLotto.condition.getWinningCondition();
			const { count } = winningLotto;
			return winnings * count + sum;
		}, 0);
	}
}
export default ProfitCalculator;
