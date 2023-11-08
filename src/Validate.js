import {ERROR_MESSAGE} from './message';
import { CONSTANT } from './constant';
class Validate {
    checkLottoPrice(lottoPrice) { //Validate
        lottoPrice = Number(lottoPrice);
        if (isNaN(lottoPrice)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        if (lottoPrice < CONSTANT.THOUSAND) throw new Error(ERROR_MESSAGE.MIN_PRICE);
        if (lottoPrice % CONSTANT.THOUSAND !== 0) throw new Error(ERROR_MESSAGE.THOUSAND_UNIT);
    }

    checkBonusNumber(userBonusNumber) { //Validate
        if (userBonusNumber === '') throw new Error(ERROR_MESSAGE.NUMBER_EMPTY);
        userBonusNumber = Number(userBonusNumber);
        if (isNaN(userBonusNumber)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        if (CONSTANT.NUMBER_MIN_RANGE > userBonusNumber || userBonusNumber > CONSTANT.NUMBER_MAX_RANGE) throw new Error(ERROR_MESSAGE.RANGE_BONUS);
    }
}

export default Validate;
