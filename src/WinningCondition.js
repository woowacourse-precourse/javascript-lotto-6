class WinningCondition {
	#correctCnt;

	#bonusCnt;

	#winnings;

	constructor({ correctCnt, bonusCnt, winnings }) {
		this.#correctCnt = correctCnt;
		this.#bonusCnt = bonusCnt;
		this.#winnings = winnings;
	}

	checkWin(correctCnt, bonusCnt) {
		if (this.#bonusCnt === 0) {
			return correctCnt === this.#correctCnt;
		}
		return correctCnt === this.#correctCnt && bonusCnt === this.#bonusCnt;
	}

	getWinnings(correctCnt, bonusCnt) {
		if (this.checkWin(correctCnt, bonusCnt)) {
			return this.#winnings;
		}
		return -1;
	}

	getWinningCondition() {
		return {
			correctCnt: this.#correctCnt,
			bonusCnt: this.#bonusCnt,
			winnings: this.#winnings,
		};
	}
}

export default WinningCondition;
