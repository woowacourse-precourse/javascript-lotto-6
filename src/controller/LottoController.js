import { Random } from "@woowacourse/mission-utils";
import { LOTTO, COMMA } from "../utils/Constant.js";
import Lotto from "../model/Lotto.js";

class LottoController {
	static lottoList = [];
	static lottoNumList = [];

	static countLottos(amount) {
		return Math.floor(amount / LOTTO.cost);
	}

	static generateLotto() {
		const lottoNumbers = [];
		while (lottoNumbers.length < LOTTO.count) {
			const number = Random.pickNumberInRange(
				LOTTO.minRange,
				LOTTO.maxRange,
				LOTTO.count
			);
			if (!lottoNumbers.includes(number)) {
				lottoNumbers.push(number);
			}
		}
		return lottoNumbers.sort((a, b) => a - b);
	}

	static setLottoList(lotto) {
		this.lottoList.push(new Lotto(lotto.join(COMMA)));
	}

	static setLottoNumList() {
		this.lottoList.forEach((lotto) =>
			this.lottoNumList.push(lotto.getNumbers())
		);
		console.log(this.lottoNumList); //나중에 삭제
	}

	static countMatchingNum(winningNumber) {
		return this.lottoNumList.map(
			(lottoNum) => lottoNum.filter((num) => winningNumber.includes(num)).length
		);
	}

	static countBonusNum(mathingNums, bonusNumber) {
		const decideBonusNum = (idx) => {
			console.log(bonusNumber);
			if (this.lottoNumList[idx].includes(bonusNumber)) return "5+1"; // 하드 코딩
			return "5"; // 하드코딩
		};
		return mathingNums.reduce((prev, curr, idx) => {
			if (curr === 5) {
				// 하드코딩
				prev.push(decideBonusNum(idx));
				return prev;
			}
			prev.push(curr.toString());
			return prev;
		}, []);
	}

	static setMatchingNumMap(winningNumber, bonusNumber) {
		this.setLottoNumList();
		const mathingNums = this.countMatchingNum(winningNumber);

		console.log("보너스 제외 일치값", mathingNums); // 값이 5이면 한번 더 판별
		const abc = this.countBonusNum(mathingNums, bonusNumber);
		console.log("보너스 포함 일치값", abc); // 값이 5이면 한번 더 판별

		// //보너스
		// mathingNum.forEach((num) => {
		// 	const key = num.toString();
		// 	const value = this.matchingNumMap.get(key);
		// 	if (this.matchingNumMap.has(key)) this.matchingNumMap.set(key, value + 1);
		// });

		// mathingNum.map((v,i)=>v===5 ?)
		// console.log(this.matchingNumMap);
	}
}

export default LottoController;
