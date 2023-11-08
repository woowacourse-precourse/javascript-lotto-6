import { MATCHING_RANK } from '../constants/messages.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#numbers = numbers;
		this.bonusNumber;
		this.matchingStatics;
		this.rateOfReturn = new Map([
			[MATCHING_RANK[5].matchingCount, 0],
			[MATCHING_RANK[4].matchingCount, 0],
			[MATCHING_RANK[3].matchingCount, 0],
			[MATCHING_RANK[2].matchingCount, 0],
			[MATCHING_RANK[1].matchingCount, 0],
		]);
	}

	getNumbers() {
		return this.#numbers;
	}

	getBonusNumber() {
		return this.bonusNumber;
	}

	setBonusNumber(number) {
		this.bonusNumber = number;
	}

	getMatchingStatics() {
		return this.matchingStatics;
	}

	setMatchingStatics(count) {
		this.matchingStatics = count;
	}

	getRateOfReturn() {
		return this.rateOfReturn;
	}

	countRateOfReturn(matchCount) {
		if (this.rateOfReturn.get(matchCount) != undefined) {
			this.rateOfReturn.set(matchCount, this.rateOfReturn.get(matchCount) + 1);
		}
	}

	compareMatching(index, lottoNumbers) {
		lottoNumbers.forEach((number) => {
			if (this.#numbers.includes(number)) {
				this.matchingStatics[index] += 1;
			}
		});
	}

	bonusCompareMatching(index, lottoNumbers) {
		if (lottoNumbers.includes(this.bonusNumber)) {
			this.matchingStatics[index] = 'bonus';
		}
	}
}

export default Lotto;
