import { MissionUtils } from '@woowacourse/mission-utils'
import { REGEX } from '../constants/REGEX.js';
import { GET_MONEY } from '../constants/Text.js';

export default class View {
  constructor() {
  }

  async getMoneyInput() {
    do {
      const money = await MissionUtils.Console.readLineAsync(GET_MONEY);
      if (!REGEX.isNumber.test(money)) {
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
      }
      
      if (!REGEX.isGreaterThanThousand.test(money)) {
        throw new Error("[ERROR] 금액은 1000원 이상이어야 합니다.");
      }
  
      if (!REGEX.isThousandMultiple.test(money)) {
        throw new Error("[ERROR] 금액은 1000원의 배수여야 합니다.");
      }

      return parseInt(money);
    } while (true);
  }

  print(text) {
    MissionUtils.Console.print(text);
  }
}
