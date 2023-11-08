import { MissionUtils } from '@woowacourse/mission-utils';
import { STRINGS } from './constants/STRINGS';
class Validation {
  static validateInputPrice(inputPrice){
    if (inputPrice % 1000 !== 0){
      throw new Error(STRINGS.ERROR_UNIT);
    }
  }
}

export default Validation;
