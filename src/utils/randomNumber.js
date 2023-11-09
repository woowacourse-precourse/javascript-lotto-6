import { MissionUtils } from '@woowacourse/mission-utils';
import CONSTRAINTS from '../constants/Constraints';

const randomNumber = {
   createUniqueNumbers() {
    const numbers =  MissionUtils.Random.pickUniqueNumbersInRange(
      CONSTRAINTS.MIN_LOTTO_NUMBER,
      CONSTRAINTS.MAX_LOTTO_NUMBER,
      CONSTRAINTS.LOTTO_NUMBERS_LENGTH,
    );
    return numbers;
  },
};
export default randomNumber;
