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

	// static countBonusNum() {
	// 	return this.lottoList.map(
	// 		(lotto) =>
	// 			lotto.getNumbers().filter((num) => winningNumber.includes(num)).length
	// 	);
	// }

	static setMatchingNumMap(winningNumber) {
		this.setLottoNumList();
		const mathingNums = this.countMatchingNum(winningNumber); // 값이 5이면 한번 더 판별

		console.log("일치값", mathingNums);
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
