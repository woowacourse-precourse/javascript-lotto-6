import Varificator from '../Utils/Varification.js';
import { LOTTO_CONSTANTS } from '../Constants/LottoContstants.js';
import StringUtil from '../Utils/StringUti.js';
import { ERROR_MESSAGE } from '../Constants/MessageConstants.js';

class VarificationManager {
	static checkPurchaseCost(value) {
		if (Varificator.isInvalidNumber(value)) {
			throw new Error(ERROR_MESSAGE.inValidNumber);
		}
		if (Varificator.isNotDividableWithStandardCost(value, LOTTO_CONSTANTS.standartLottoCost)) {
			throw new Error(ERROR_MESSAGE.inValidLottoCost);
		}

		return true;
	}

	static checkLottoNumber(numbers) {
		let parsedNumber = numbers;

		if (typeof numbers === 'string') {
			parsedNumber = StringUtil.stringToNumberArray(numbers);
		}

		if (parsedNumber.some((number) => Varificator.isInvalidNumber(number))) {
			throw new Error(ERROR_MESSAGE.inCludeInValidNumber);
		}
		if (Varificator.isNotFitWithLottoLength(parsedNumber, LOTTO_CONSTANTS.lottoNumberCount)) {
			throw new Error(ERROR_MESSAGE.inValidLottoLength);
		}
		if (Varificator.isDuplicatedNumber(parsedNumber)) {
			throw new Error(ERROR_MESSAGE.duplicatedNumber);
		}
		if (
			parsedNumber.some((number) =>
				Varificator.isNotNumberInRange(
					number,
					LOTTO_CONSTANTS.maxLottoNumber,
					LOTTO_CONSTANTS.minLottoNumber,
				),
			)
		) {
			throw new Error(ERROR_MESSAGE.outOfNumberScale);
		}

		return true;
	}

	static checkBonusLottoNumber(bonusNumber, numbers) {
		let lottoNumbers = numbers;

		if (typeof lottoNumbers === 'string') {
			lottoNumbers = StringUtil.stringToNumberArray(numbers);
		}

		if (Varificator.isInvalidNumber(bonusNumber)) {
			throw new Error(ERROR_MESSAGE.inValidNumber);
		}

		if (Varificator.isNumberInArray(lottoNumbers, bonusNumber)) {
			throw new Error(ERROR_MESSAGE.duplicatedNumber);
		}

		if (
			Varificator.isNotNumberInRange(
				bonusNumber,
				LOTTO_CONSTANTS.maxLottoNumber,
				LOTTO_CONSTANTS.minLottoNumber,
			)
		) {
			throw new Error(ERROR_MESSAGE.outOfNumberScale);
		}

		return true;
	}
}

export default VarificationManager;
