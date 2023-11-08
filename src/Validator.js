class Validator {
	static checkIsNaturalNumber(str) {
		return /^[1-9]\d*$/.test(str);
	}

	static checkIsDividedByLottoPrice(str) {
		return parseInt(str, 10) % 1000 === 0;
	}

	static checkNoDupSize(array, expectedSize) {
		const set = new Set(array);
		return set.size === expectedSize && array.length === expectedSize;
	}

	static checkAllNumberInRange(array, start, end) {
		const isNotValid = array.some((str) => {
			if (!Validator.checkIsNaturalNumber(str)) {
				return true;
			}
			return parseInt(str, 10) < start || parseInt(str, 10) > end;
		});

		return !isNotValid;
	}

	static checkBudgetValidity(str) {
		const isStrNaturalNumber = Validator.checkIsNaturalNumber(str);
		if (!isStrNaturalNumber) {
			throw new Error('[ERROR] 자연수를 입력해주세요.');
		}

		const isStrDivideBy1000 = Validator.checkIsDividedByLottoPrice(str);
		if (!isStrDivideBy1000) {
			throw new Error('[ERROR] 1000의 배수를 입력해주세요.');
		}

		return true;
	}

	static checkWinningNumberValidity(str) {
		const winningNumberArray = str?.split(',');

		const isArraySizeCorrect = Validator.checkNoDupSize(winningNumberArray, 6);
		if (!isArraySizeCorrect) {
			throw new Error(
				`[ERROR] ${6}개의 숫자를 입력해주세요. 중복은 허용되지 않습니다.`,
			);
		}

		const isAllNumberInRange = Validator.checkAllNumberInRange(
			winningNumberArray,
			1,
			45,
		);
		if (!isAllNumberInRange) {
			throw new Error(
				`[ERROR] ${1}에서 ${45}사이의 숫자를 입력해주세요.`,
			);
		}

		return true;
	}

	static generateBonusNumberValidateFunc(winningNumber) {
		return (str) => {
			Validator.checkBonusNumberCondition(str);
			Validator.checkWinningNumberBonusNumberDup(winningNumber, str);
		};
	}

	static checkBonusNumberCondition(str) {
		const isStrNaturalNumber = Validator.checkIsNaturalNumber(str);
		if (!isStrNaturalNumber) {
			throw new Error('[ERROR] 자연수를 입력해주세요.');
		}

		const isNumberInRange = parseInt(str, 10) >= 1 && parseInt(str, 10) <= 45;
		if (!isNumberInRange) {
			throw new Error(
				`[ERROR] ${1}에서 ${45}사이의 숫자를 입력해주세요.`,
			);
		}

		return true;
	}

	static checkWinningNumberBonusNumberDup(winningNumber, bonusNumber) {
		if (winningNumber.split(',').indexOf(bonusNumber) > -1) {
			throw new Error('[ERROR] 보너스 번호도 중복을 피해주세요.');
		}
	}
}
export default Validator;
