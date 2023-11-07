const checkIsNaturalNumber = (str) => {
	return /r'[1-9]\d*'/.test(str);
};

const checkIsDividedByLottoPrice = (str) => {
	return parseInt(str, 10) % 1000 === 0;
};

const checkNoDupSize = (array, expectedSize) => {
	const set = new Set(array);
	return set.size === expectedSize && array.length === expectedSize;
};

const checkAllNumberInRange = (array, start, end) => {
	const isNotValid = array.some((str) => {
		if (!checkIsNaturalNumber(str)) {
			return true;
		}
		return parseInt(str, 10) < start || parseInt(str, 10) > end;
	});

	return !isNotValid;
};

const Validator = {
	checkBudgetValidity(str) {
		const isStrNaturalNumber = checkIsNaturalNumber(str);
		if (!isStrNaturalNumber) {
			throw new Error('[ERROR] 자연수를 입력해주세요.');
		}

		const isStrDivideBy1000 = checkIsDividedByLottoPrice(str);
		if (!isStrDivideBy1000) {
			throw new Error('[ERROR] 1000의 배수를 입력해주세요.');
		}

		return true;
	},

	checkWinningNumberValidity(str) {
		const winningNumberArray = str?.split(',');

		const isArraySizeCorrect = checkNoDupSize(winningNumberArray, 6);
		if (!isArraySizeCorrect) {
			throw new Error(
				`[ERROR] ${6}개의 숫자를 입력해주세요. 중복은 허용되지 않습니다.`,
			);
		}

		const isAllNumberInRange = checkAllNumberInRange(winningNumberArray, 1, 45);
		if (!isAllNumberInRange) {
			throw new Error(
				`[ERROR] ${1}에서 ${45}사이의 숫자를 입력해주세요.`,
			);
		}

		return true;
	},

	checkBonusNumberValidity(str) {
		const isStrNaturalNumber = checkIsNaturalNumber(str);
		if (!isStrNaturalNumber) {
			throw new Error('[ERROR] 자연수를 입력해주세요.');
		}

		return true;
	},
};
export default Validator;
