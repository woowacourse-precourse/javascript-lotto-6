import { MissionUtils } from '@woowacourse/mission-utils'
import { REGEX } from '../constants/REGEX.js';

export const generateNumbers = async () => {
  const randomNumbers = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  randomNumbers.sort((a, b) => a - b);

  return randomNumbers
}

export const checkMoneyInput = (money) => {
  if (!REGEX.isNumber.test(money)) {
    throw new Error("[ERROR] 숫자를 입력해야 합니다.");
  }
  
  if (!REGEX.isGreaterThanThousand.test(money)) {
    throw new Error("[ERROR] 금액은 1000원 이상이어야 합니다.");
  }

  if (!REGEX.isThousandMultiple.test(money)) {
    throw new Error("[ERROR] 금액은 1000원의 배수여야 합니다.");
  }
}