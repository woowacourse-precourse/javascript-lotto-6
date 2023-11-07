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

export const checkWinInput = (win) => {
  if (!REGEX.isCommaSeparatedNumber.test(win)) {
    throw new Error("[ERROR] 로또 번호는 콤마로 구분된 숫자여야 합니다.");
  }
  
  if (!REGEX.isSixNumbers.test(win)) {
    throw new Error("[ERROR] 로또 번호는 6개의 숫자여야 합니다.");
  }
  
  if (!REGEX.isBetween1And45.test(win)) {
    throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
  
  if (!REGEX.isUniqueNumber.test(win)) {
    throw new Error("[ERROR] 로또 번호는 유일한 숫자여야 합니다.");
  }
}
}