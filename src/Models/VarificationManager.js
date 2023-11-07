import Varificator from '../Utils/Varification.js';
import { LOTTO_CONSTANTS, DEFAULT_CONSTANT } from '../Constants/LottoContstants.js';

class VarificationManager {
	static checkPurchasePrice(value) {
		if (Varificator.isInvalidNumber(value)) {
			throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
		}
		if (Varificator.isNotDividableWithStandardCost(value, LOTTO_CONSTANTS.standartLottoCost)) {
			throw new Error(`[ERROR] ${LOTTO_CONSTANTS.standartLottoCost}원 단위로 입력해주세요.`);
		}
	}

	static checkLottoNumber(textNumbers) {
		const numbers = textNumbers.split(DEFAULT_CONSTANT.splitStandardText);
		const trimmedNumbers = numbers.map((number) => number.trim());

		if (trimmedNumbers.some((number) => Varificator.isInvalidNumber(number))) {
			throw new Error('[ERROR] 유효하지 않은 숫자가 포함되어 있습니다.');
		}
		if (Varificator.isNotFitWithLottoLength(trimmedNumbers, LOTTO_CONSTANTS.lottoNumberCount)) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}
		if (Varificator.isDuplicatedNumber(trimmedNumbers)) {
			throw new Error('[ERROR] 중복된 번호가 존재합니다.');
		}
		if (
			trimmedNumbers.some((number) =>
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
	}

	static checkBonusLottoNumber(numbers, bonusNumber) {
		if (Varificator.isInvalidNumber(bonusNumber)) {
			throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
		}

		const splitNumbers = numbers.split(DEFAULT_CONSTANT.splitStandardText);
		if (Varificator.isNumberInArray(splitNumbers, bonusNumber)) {
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
	}
}

export default VarificationManager;
