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

  static validateRepeatedNumbers(numbers){
    const SET_ANSWERS = new Set(numbers);
    if (numbers.length !== SET_ANSWERS){
      throw new Error(STRINGS.ERROR_REPEATED);
    }
  }

}

export default Validation;
