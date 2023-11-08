import { MissionUtils } from '@woowacourse/mission-utils';
import { CONSTANT } from '../constant/Constant';

export const generateNumbers = async () => {
  const randomNumbers = await MissionUtils.Random.pickUniqueNumbersInRange(
    CONSTANT.START_LOTTO_NUMBER,
    CONSTANT.END_LOTTO_NUMBER,
    CONSTANT.HOW_MANY_PICK_NUMBERS
  );
  randomNumbers.sort((a, b) => a - b);

  return randomNumbers;
};
