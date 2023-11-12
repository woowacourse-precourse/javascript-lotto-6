import CONFIG from '../constants/config.js';
import ERROR_MESSAGES from '../constants/errorMessage.js';
import { checkListSameValue, checkListValues } from '../utils/listUtils.js';
import { checkNumberType } from '../utils/numberUtils.js';
import throwError from '../utils/throwError.js';

class CorrectNumbersModel {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // prettier-ignore
  #validate(numbers) {
    
    numbers.forEach((lottoNumber) => !checkNumberType(lottoNumber) && throwError(ERROR_MESSAGES.numberTypeError));

    checkListValues(numbers,CONFIG.minLottoNumber,CONFIG.maxLottoNumber) && throwError(ERROR_MESSAGES.numberOutOfRange);

    numbers.length !== CONFIG.lottoLength && throwError(ERROR_MESSAGES.numberOverLength);

    checkListSameValue(numbers) && throwError(ERROR_MESSAGES.isSameLottoNumber);
  
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default CorrectNumbersModel;
