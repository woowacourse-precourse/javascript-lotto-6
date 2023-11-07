import Varificator from '../Utils/Varification.js';
import LOTTO_CONSTANTS from '../Constants/LottoContstants.js';

class VarificationManager {
	static checkPurchasePrice(value) {
		if (Varificator.isInvalidNumber(value)) {
			throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
		}
		if (Varificator.isNotDividableWithStandardCost(value)) {
			throw new Error(`[ERROR] ${LOTTO_CONSTANTS.standartLottoCost}원 단위로 입력해주세요.`);
		}
	}
}

export default VarificationManager;
