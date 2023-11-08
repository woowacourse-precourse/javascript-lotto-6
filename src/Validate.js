import { ERROR_MESSAGE} from './message';
class Validate {
    checkLottoPrice(lottoPrice) { //Validate
        lottoPrice = Number(lottoPrice);
        if (isNaN(lottoPrice)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        if (lottoPrice < 1000) throw new Error(ERROR_MESSAGE.MIN_PRICE);
        if (lottoPrice % 1000 !== 0) throw new Error(ERROR_MESSAGE.THOUSAND_UNIT);
    }

    checkBonusNumber(userBonusNumber) { //Validate
        if (userBonusNumber === '') throw new Error(ERROR_MESSAGE.NUMBER_EMPTY);
        userBonusNumber = Number(userBonusNumber);
        if (isNaN(userBonusNumber)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        if (1 > userBonusNumber || userBonusNumber > 45) throw new Error(ERROR_MESSAGE.RANGE_BONUS);
    }
}

export default Validate;