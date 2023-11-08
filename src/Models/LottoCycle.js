import { Console } from '@woowacourse/mission-utils';
import { LOTTO_RANK_STANDARD, LOTTO_REWARD_CONSTANTS } from '../Constants/LottoContstants.js';
import LottoCheck from '../Utils/lottoCheck.js';

class LottoCycle {
	#purchaseCost;
	#userLottos;
	#winnerLotto;
	#bonusLotto;
	#scoreCount = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};

	constructor({ purchaseCost, userLottos, winnerLotto, bonusLotto }) {
		this.#purchaseCost = purchaseCost;
		this.#userLottos = userLottos;
		this.#winnerLotto = winnerLotto;
		this.#bonusLotto = bonusLotto;
	}

	#updateScoreCount(correctCount, isCorrectBouns) {
		switch (correctCount) {
			case LOTTO_RANK_STANDARD[1]:
				this.#scoreCount[1] += 1;
				break;
			case 5:
				if (isCorrectBouns) {
					this.#scoreCount[2] += 1;
					break;
				}
				this.#scoreCount[3] += 1;
				break;
			case 4:
				this.#scoreCount[4] += 1;
				break;
			case 3:
				this.#scoreCount[5] += 1;
				break;
		}
	}

	checkLottosRank() {
		this.#userLottos.forEach((lotto) => {
			const correctCount = LottoCheck.checkCorrectNumber(this.#winnerLotto, lotto);
			const isCorrectBonus = lotto.includes(this.#bonusLotto);
			this.#updateScoreCount(correctCount, isCorrectBonus);
		});
	}

	calculateEarnRate() {
		let totalReward = 0;

		for (const rank in this.#scoreCount) {
			totalReward += LOTTO_REWARD_CONSTANTS[rank] * this.#scoreCount[rank];
		}

		return ((totalReward / this.#purchaseCost) * 100).toFixed(1);
	}

	printLottoResult() {
		const earnRate = this.calculateEarnRate();

		Console.print('\n당첨통계\n---\n');

		for (const rank in this.#scoreCount) {
			const rewardString = new Intl.NumberFormat('en-US').format(LOTTO_REWARD_CONSTANTS[rank]);

			if (rank === 2) {
				Console.log(
					`${LOTTO_RANK_STANDARD[rank]}개 일치, 보너스 불 일치 (${rewardString}원) - ${
						this.#scoreCount[rank]
					}개`,
				);
			}

			Console.log(
				`${LOTTO_RANK_STANDARD[rank]}개 일치 (${rewardString}원) - ${this.#scoreCount[rank]}개`,
			);
		}

		Console.print(`총 수익률은 ${earnRate}%입니다.`);
	}

	get scoreCount() {
		return this.#scoreCount;
	}
}

export default LottoCycle;
