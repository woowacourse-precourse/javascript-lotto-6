class ProfitCalculator {
	static getProfitRate(budget, winningLottoList) {
		const totalWinnings = ProfitCalculator.sumTotalWinnings(winningLottoList);

		const profitRate = (totalWinnings / budget) * 100;

		return ProfitCalculator.formatProfitRate(profitRate);
	}

	static formatProfitRate(number) {
		return `${number.toFixed(1)}%`;
	}

	static sumTotalWinnings(winningLottoList) {
		return winningLottoList.reduce(
			(sum, obj) => obj.condition.winnings * obj.count + sum,
			0,
		);
	}
}
export default ProfitCalculator;
