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
		return winningLottoList.reduce((sum, statisticObj) => {
			const { winnings } =
				statisticObj.condition.getWinningCondition();
			const { count } = statisticObj;
			return winnings * count + sum;
		}, 0);
	}
}
export default ProfitCalculator;
