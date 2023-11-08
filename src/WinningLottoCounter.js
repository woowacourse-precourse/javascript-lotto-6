import LottoRules from './LottoRules.js';
import WinningLotto from './WinningLotto.js';

class WinningLotoCounter {
	#purchaseResult; // [{condition:{},count:number}]

	#rules = [];

	constructor(lottoRules) {
		this.#initializeRule(lottoRules);
		this.#initializePurchaseResult();
	}

	countWinningLottos(lottoList, winningNumber, bonusNumber) {
		lottoList.forEach((lotto) => {
			const { correctCnt, bonusCnt } = WinningLotoCounter.checkLotto(
				lotto.getLottoNumber(),
				winningNumber,
				bonusNumber,
			);
			this.#updateCount(correctCnt, bonusCnt);
		});
	}

	#updateCount(correctCnt, bonusCnt) {
		this.#purchaseResult.forEach((winningLotto) => {
			if (winningLotto.condition.checkWin(correctCnt, bonusCnt)) {
				winningLotto.addCount();
			}
		});
	}

	getPurchaseResult() {
		return this.#purchaseResult;
	}

	#initializeRule(newRule) {
		const rules = new LottoRules(newRule);
		this.#rules = rules.getTotalRule();
	}

	#initializePurchaseResult() {
		const purchaseResultt = this.#rules.map(
			(condition) => new WinningLotto(condition),
		);
		this.#purchaseResult = purchaseResultt;
	}

	static checkLotto(numbers, winningNumberStr, bonusNumberStr) {
		const winningNumbers = winningNumberStr
			.split(',')
			.map((str) => str * 1)
			.sort((a, b) => a - b);
		const bonusNumber = bonusNumberStr * 1;

		const correctCnt = WinningLotoCounter.countCorrectCnt(
			numbers,
			winningNumbers,
		);
		const bonusCnt = numbers.indexOf(bonusNumber) > -1 ? 1 : 0;
		return { correctCnt, bonusCnt };
	}

	static countCorrectCnt(numbers, winningNumbers) {
		// both sorted assured
		let cnt = 0;
		let numberIndex = 0;
		let winningNumbersIndex = 0;

		while (
			numberIndex < numbers.length &&
			winningNumbersIndex < winningNumbers.length
		) {
			const targetNumber = numbers[numberIndex];
			const targetWinningNumber = winningNumbers[winningNumbersIndex];
			if (targetNumber === targetWinningNumber) {
				cnt += 1;
				winningNumbersIndex += 1;
				numberIndex += 1;
			}
			if (targetNumber > targetWinningNumber) {
				winningNumbersIndex += 1;
			}
			if (targetNumber < targetWinningNumber) {
				numberIndex += 1;
			}
		}
		return cnt;
	}
}
export default WinningLotoCounter;
