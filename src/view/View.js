import { MissionUtils } from '@woowacourse/mission-utils'
import { GET_MONEY } from '../constants/Text.js';
import { checkMoneyInput } from '../utils/LottoUtils.js';

export default class View {
  constructor() {
  }

  print(text) {
    MissionUtils.Console.print(text);
  }

  async inputRepeater(callback) {
    let result;
    while (true) {
      try {
        result = await callback();
        break;
      } catch (error) {
        this.print(error.message);
      }
    }
    return result;
  }

  async getMoneyInput() {
    const money = await MissionUtils.Console.readLineAsync(GET_MONEY);
    checkMoneyInput(money);

    return parseInt(money);
  }

  async getWinInput() {
  }

  printLottos(lottos) {
    const lottosCount = lottos.length;
    this.print(`\n${lottosCount}개를 구매하였습니다.`);

    for (let i = 0; i < lottosCount; i++) {
      this.print(lottos[i].toString());
    }
  }
}
