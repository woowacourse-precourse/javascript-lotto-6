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

  static repeatedAnswerNumbers(answerNumbers){
    const PARSED_ANSWERS = answerNumbers.split(",");
    this.validateRepeatedNumbers(PARSED_ANSWERS);
  }

  static validateNumbersLength(numbers){
    if (numbers.length !== 6) {
      throw new Error(STRINGS.ERROR_LENGTH);
    }
  }

}

export default Validation;
