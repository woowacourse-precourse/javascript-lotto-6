import WinningCondition from './WinningCondition';

const DEFAULT_RULES = [
	{ correctCnt: 3, bonusCnt: 0, winnings: 5000 },
	{ correctCnt: 4, bonusCnt: 0, winnings: 50000 },
	{ correctCnt: 5, bonusCnt: 0, winnings: 1500000 },
	{ correctCnt: 5, bonusCnt: 1, winnings: 30000000 },
	{ correctCnt: 6, bonusCnt: 0, winnings: 2000000000 },
];

class LottoRules {
	#winningRule = [];

	constructor(newRules) {
		this.#initializeWinningRules(newRules || DEFAULT_RULES);
		this.#sortWinningRules();
	}

	getTotalRule() {
		return this.#winningRule;
	}

	#initializeWinningRules(rules) {
		const winningRule = rules.map((ruleObj) => new WinningCondition(ruleObj));
		this.#winningRule = winningRule;
	}

	#sortWinningRules() {
		this.#winningRule = this.#winningRule.sort(
			(conditionA, conditionB) =>
				conditionA.getWinningCondition().winnings -
				conditionB.getWinningCondition().winnings,
		);
	}
}
export default LottoRules;
