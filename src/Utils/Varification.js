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

	isNotDividableWithStandardCost(string, standardCost) {
		return Number(string) % standardCost !== 0;
	},

	isNotFitWithLottoLength(numbers, lottoCount) {
		return numbers.length !== lottoCount;
	},

	isDuplicatedNumber(numbers) {
		const duplicateDeleteNumber = [...new Set(numbers)];

		return duplicateDeleteNumber.length !== numbers.length;
	},

	isNotNumberInRange(number, maxRange, minRange) {
		return number > maxRange || number < minRange;
	},

	isNumberInArray(numbers, targetNumber) {
		return numbers.includes(targetNumber);
	},
};

export default Varificator;
