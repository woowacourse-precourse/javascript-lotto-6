import LottoRules from './LottoRules.js';
import StatisticObj from './StatisticCondition.js';

class WinningLotoCounter {
	#winningLottoList; // [{condition:{},count:number}]

	#rules = [];

	constructor(lottoRules) {
		this.#initializeRule(lottoRules);
		this.#initializeWinningLottoList();
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
		this.#winningLottoList.forEach((statisticObj) => {
			if (statisticObj.condition.checkWin(correctCnt, bonusCnt)) {
				statisticObj.addCount();
			}
		});
	}

	getWinningLottoList() {
		return this.#winningLottoList;
	}

	#initializeRule(newRule) {
		const rules = new LottoRules(newRule);
		this.#rules = rules.getTotalRule();
	}

	#initializeWinningLottoList() {
		const winningLottoList = this.#rules.map(
			(condition) => new StatisticObj(condition),
		);
		this.#winningLottoList = winningLottoList;
	}

	static checkLotto(numbers, winningNumberStr, bonusNumberStr) {
		const winningNumbers = winningNumberStr.split(',').map((str) => str * 1);
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
