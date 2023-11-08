import CONFIG from '../constants/config.js';
import ERROR_MESSAGES from '../constants/errorMessage.js';
import { checkListSameValue, checkListValues } from '../utils/listUtils.js';
import { checkNumberType } from '../utils/numberUtils.js';
import throwError from '../utils/throwError.js';

class BonusNumberModel {
  #correctNumberModel;

  #number;

  constructor(number, correctNumberModel) {
    this.#correctNumberModel = correctNumberModel;
    this.#validate(number);
    this.#number = +number;
  }

  // prettier-ignore
  #validate(number) {
    !checkNumberType(number) && throwError(ERROR_MESSAGES.numberTypeError);

    checkListValues([number],CONFIG.minLottoNumber,CONFIG.maxLottoNumber) && throwError(ERROR_MESSAGES.numberOutOfRange);
    
    checkListSameValue([...this.#correctNumberModel.getNumbers(),+number]) && throwError(ERROR_MESSAGES.isSameLottoNumber)
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumberModel;
