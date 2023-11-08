import Varificator from '../Utils/Varification.js';
import { LOTTO_CONSTANTS } from '../Constants/LottoContstants.js';
import StringUtil from '../Utils/StringUti.js';

class VarificationManager {
	static checkPurchaseCost(value) {
		if (Varificator.isInvalidNumber(value)) {
			throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
		}
		if (Varificator.isNotDividableWithStandardCost(value, LOTTO_CONSTANTS.standartLottoCost)) {
			throw new Error(`[ERROR] ${LOTTO_CONSTANTS.standartLottoCost}원 단위로 입력해주세요.`);
		}

		return true;
	}

	static checkLottoNumber(numbers) {
		let parsedNumber = numbers;

		if (typeof numbers === 'string') {
			parsedNumber = StringUtil.stringToNumberArray(numbers);
		}

		if (parsedNumber.some((number) => Varificator.isInvalidNumber(number))) {
			throw new Error('[ERROR] 유효하지 않은 숫자가 포함되어 있습니다.');
		}
		if (Varificator.isNotFitWithLottoLength(parsedNumber, LOTTO_CONSTANTS.lottoNumberCount)) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}
		if (Varificator.isDuplicatedNumber(parsedNumber)) {
			throw new Error('[ERROR] 중복된 번호가 존재합니다.');
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
			throw new Error(
				`[ERROR] ${LOTTO_CONSTANTS.minLottoNumber}과 ${LOTTO_CONSTANTS.maxLottoNumber} 사이 숫자만 입력 가능합니다.`,
			);
		}

		return true;
	}

	static checkBonusLottoNumber(bonusNumber, numbers) {
		let lottoNumbers = numbers;

		if (typeof lottoNumbers === 'string') {
			lottoNumbers = StringUtil.stringToNumberArray(numbers);
		}

		if (Varificator.isInvalidNumber(bonusNumber)) {
			throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
		}

		if (Varificator.isNumberInArray(lottoNumbers, bonusNumber)) {
			throw new Error('[ERROR] 중복된 숫자가 존재합니다.');
		}

		if (
			Varificator.isNotNumberInRange(
				bonusNumber,
				LOTTO_CONSTANTS.maxLottoNumber,
				LOTTO_CONSTANTS.minLottoNumber,
			)
		) {
			throw new Error(
				`[ERROR] ${LOTTO_CONSTANTS.minLottoNumber}과 ${LOTTO_CONSTANTS.maxLottoNumber} 사이 숫자만 입력 가능합니다.`,
			);
		}

		return true;
	}
}

export default VarificationManager;
