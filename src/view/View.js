import { MissionUtils } from '@woowacourse/mission-utils'
import { REGEX } from '../constants/REGEX.js';
import { GET_MONEY } from '../constants/Text.js';

export default class View {
  constructor() {
  }

  async getMoneyInput() {
    const money = await MissionUtils.Console.readLineAsync(GET_MONEY);
    if (!REGEX.isNumber.test(money)) {
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }

    return parseInt(money);
  }

  print(text) {
    MissionUtils.Console.print(text);
  }
}
