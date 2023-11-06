import LOTTO_CONSTANTS from '../Constants/LottoContstants.js';

const isNumber = (string) => {
	if (Number.isNaN(string)) throw new Error('[ERROR] 유효한 숫자를 입력해주세요.');

	return string;
};

const isDividableWithStandardCost = (string) => {
	if (Number(string) % LOTTO_CONSTANTS.standartLottoCost > 0) {
		throw new Error(`[ERROR] ${LOTTO_CONSTANTS.standartLottoCost}원 단위로 입력해주세요.`);
	}

	return string;
};

export { isNumber, isDividableWithStandardCost };
