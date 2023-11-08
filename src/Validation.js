import { MissionUtils } from '@woowacourse/mission-utils';
import { STRINGS } from './constants/STRINGS';
class Validation {
  static validateInputPrice(inputPrice){
    if (inputPrice % 1000 !== 0){
      throw new Error(STRINGS.ERROR_UNIT);
    }
  }

  static validateAnswerNumbersComma(answerNumbers){
    if (!answerNumbers.includes(",")){
      throw new Error(STRINGS.ERROR_COMMA);
    }
  }

}

export default Validation;
