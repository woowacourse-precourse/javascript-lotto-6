class LottoRules {
	#winningRule = [
		{ correctCnt: 3, bonusCnt: 0, winnings: 5000 },
		{ correctCnt: 4, bonusCnt: 0, winnings: 50000 },
		{ correctCnt: 5, bonusCnt: 0, winnings: 1500000 },
		{ correctCnt: 5, bonusCnt: 1, winnings: 30000000 },
		{ correctCnt: 6, bonusCnt: 0, winnings: 2000000000 },
	];

	getWinnings(correctCnt, bonusCnt) {
		const correctRank = this.#winningRule.find(
			(condition) =>
				condition.correctCnt === correctCnt &&
				condition.bonusCnt === bonusCnt,
		);
		if (!correctRank) {
			return -1;
		}
		return correctRank.winnings;
	}

	getTotalRule() {
		return this.#winningRule;
	}
}
export default LottoRules;
