import { MATCHING_RANK } from '../constants/messages.js';

class Statics {
	#matchingStatics;
	#rateOfReturn;

	constructor(statics) {
		this.#matchingStatics = statics;
		this.#rateOfReturn = new Map([
			[MATCHING_RANK[5].matchingCount, 0],
			[MATCHING_RANK[4].matchingCount, 0],
			[MATCHING_RANK[3].matchingCount, 0],
			[MATCHING_RANK[2].matchingCount, 0],
			[MATCHING_RANK[1].matchingCount, 0],
		]);
	}

	getMatchingStatics() {
		return this.#matchingStatics;
	}

	setMatchingStatics(count) {
		this.#matchingStatics = count;
	}

	getRateOfReturn() {
		return this.#rateOfReturn;
	}

	countRateOfReturn(matchCount) {
		if (this.#rateOfReturn.get(matchCount) != undefined) {
			this.#rateOfReturn.set(matchCount, this.#rateOfReturn.get(matchCount) + 1);
		}
	}

	compareMatching(index, lottoNumbers, matchNumbers) {
		lottoNumbers.forEach((number) => {
			if (matchNumbers.includes(number)) {
				this.#matchingStatics[index] += 1;
			}
		});
	}

	bonusCompareMatching(index, lottoNumbers, bonusNumber) {
		if (lottoNumbers.includes(bonusNumber)) {
			this.#matchingStatics[index] = 'bonus';
		}
	}
}

export default Statics;
