import WinningCondition from './WinningCondition.js';
import { DEFAULT_RULES } from './constant.js';

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
