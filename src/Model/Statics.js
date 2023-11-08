import { MATCHING_RANK } from '../constants/messages.js';

class Statics {
	#matchingStatics;
	#proceed;
	#totalProceed = 0;

	constructor(statics) {
		this.#matchingStatics = statics;
		this.#proceed = new Map([
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

	getProceed() {
		return this.#proceed;
	}

	getTotalProceed() {
		return this.#totalProceed;
	}

	setTotalProceed(number) {
		this.#totalProceed += number;
	}

	countProceed(matchCount) {
		if (this.#proceed.has(matchCount)) {
			this.#proceed.set(matchCount, this.#proceed.get(matchCount) + 1);
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
