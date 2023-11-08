import { Random } from "@woowacourse/mission-utils";
import { LOTTO, COMMA, PRINT_OUTPUT, MONEY } from "../utils/Constant.js";
import Lotto from "../model/Lotto.js";

class LottoController {
	static lottoList = [];
	static lottoNumList = [];
	static matchingNumMap = new Map([
		[PRINT_OUTPUT.three, 0],
		[PRINT_OUTPUT.four, 0],
		[PRINT_OUTPUT.five, 0],
		[PRINT_OUTPUT.fiveBonus, 0],
		[PRINT_OUTPUT.six, 0],
	]);

	static countLottos(amount) {
		return Math.floor(amount / LOTTO.cost);
	}

	static generateLotto() {
		const lottoNumbers = Random.pickUniqueNumbersInRange(
			LOTTO.minRange,
			LOTTO.maxRange,
			LOTTO.count
		);
		return lottoNumbers.sort((a, b) => a - b);
	}

	static setLottoList(lotto) {
		this.lottoList.push(new Lotto(lotto.join(COMMA)));
	}

	static setLottoNumList() {
		this.lottoList.forEach((lotto) => this.lottoNumList.push(lotto.getNumbers()));
	}

	static countMatchingNum(winningNumber) {
		return this.lottoNumList.map(
			(lottoNum) => lottoNum.filter((num) => winningNumber.includes(num)).length
		);
	}

	static decideBonusNum = (idx, bonusNumber) => {
		if (this.lottoNumList[idx].includes(bonusNumber)) return PRINT_OUTPUT.fiveBonus;
		return PRINT_OUTPUT.five;
	};

	static countBonusNum(mathingNums, bonusNumber) {
		return mathingNums.reduce((prev, curr, idx) => {
			if (curr.toString() === PRINT_OUTPUT.five) {
				prev.push(this.decideBonusNum(idx, bonusNumber));
				return prev;
			}
			prev.push(curr.toString());
			return prev;
		}, []);
	}

	static setMatchingNumMap(winningNumber, bonusNumber) {
		this.setLottoNumList();
		let mathingNums = this.countMatchingNum(winningNumber);
		mathingNums = this.countBonusNum(mathingNums, bonusNumber);

		mathingNums.forEach((key) => {
			const value = this.matchingNumMap.get(key);
			if (this.matchingNumMap.has(key)) this.matchingNumMap.set(key, value + 1);
		});
	}

	static getEarnedMoney() {
		const money = [
			MONEY.krw5000,
			MONEY.krw50000,
			MONEY.krw1500000,
			MONEY.krw30000000,
			MONEY.krw2000000000,
		];
		return [...this.matchingNumMap.values()].reduce(
			(sum, count, idx) => sum + count * money[idx],
			0
		);
	}

	static calculateRate(amount) {
		const rate = (this.getEarnedMoney() / amount) * 100;
		return Math.round(rate * 100) / 100;
	}
}

export default LottoController;
