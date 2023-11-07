import LOTTO_CONSTANTS from '../Constants/LottoContstants.js';

const Varificator = {
	isNotNumber(value) {
		return Number.isNaN(value);
	},

	isDecimal(value) {
		return Number(value) % 1 !== 0;
	},

	isNotPlus(value) {
		return Number(value) <= 0;
	},

	isInvalidNumber(value) {
		return this.isNotNumber(value) || this.isDecimal(value) || this.isNotPlus(value);
	},

	isNotDividableWithStandardCost(string) {
		return Number(string) % LOTTO_CONSTANTS.standartLottoCost !== 0;
	},

	isNotFitWithLottoLength(numbers) {
		return numbers.length !== LOTTO_CONSTANTS.lottoNumberCount;
	},

	isNotNumberInRange(number, maxRange, minRange) {
		return number > maxRange || number < minRange;
	},
};

export default Varificator;
