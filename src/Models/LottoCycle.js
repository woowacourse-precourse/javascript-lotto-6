import { Console } from '@woowacourse/mission-utils';
import { LOTTO_RANK_STANDARD, LOTTO_REWARD_CONSTANTS } from '../Constants/LottoContstants.js';
import LottoCheck from '../Utils/lottoCheck.js';
import { SYSTEM_MESSAGE } from '../Constants/MessageConstants.js';

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
			const correctCount = LottoCheck.checkCorrectNumber(this.#winnerLotto.numbers, lotto);
			const isCorrectBonus = lotto.includes(this.#bonusLotto.bonusNumber);
			this.#updateScoreCount(correctCount, isCorrectBonus);
		});
	}

	calculateEarnRate() {
		let totalReward = 0;

		for (const rank in this.#scoreCount) {
			totalReward += LOTTO_REWARD_CONSTANTS[rank] * this.#scoreCount[rank];
		}

		const fixedTotalReward = ((totalReward / this.#purchaseCost) * 100).toFixed(1);
		const formattedTotalReward = new Intl.NumberFormat('en-US').format(fixedTotalReward);

		return formattedTotalReward;
	}

	printLottoResult() {
		const earnRate = this.calculateEarnRate();

		Console.print(SYSTEM_MESSAGE.lottoResultTitle);

		for (const rank in this.#scoreCount) {
			const rewardString = new Intl.NumberFormat('en-US').format(LOTTO_REWARD_CONSTANTS[rank]);

			if (rank == 2) {
				Console.print(
					SYSTEM_MESSAGE.lottoRankResultMessageWithBonus(
						LOTTO_RANK_STANDARD[rank],
						rewardString,
						this.#scoreCount[rank],
					),
				);
			}

			Console.print(
				SYSTEM_MESSAGE.lottoRankResultMessage(
					LOTTO_RANK_STANDARD[rank],
					rewardString,
					this.#scoreCount[rank],
				),
			);
		}

		Console.print(SYSTEM_MESSAGE.lottoEarnRateMessage(earnRate));
	}

	get purchaseCost() {
		return this.#purchaseCost;
	}

	get scoreCount() {
		return this.#scoreCount;
	}

	get userLottos() {
		return this.#userLottos;
	}

	get winnerLotto() {
		return this.#winnerLotto;
	}

	get bonusLotto() {
		return this.#bonusLotto;
	}
}

export default LottoCycle;
