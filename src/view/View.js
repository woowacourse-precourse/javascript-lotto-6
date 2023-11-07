import { MissionUtils } from '@woowacourse/mission-utils'
import { INPUT } from '../constants/INPUT.js';
import LottoUtils from '../model/LottoUtils.js';

export default class View {
  #lottoUtils;

  constructor() {
    this.#lottoUtils = new LottoUtils();
  }

  print(text) {
    MissionUtils.Console.print(text);
  }

  async inputRepeater(callback, argument = null) {
    let result;
    while (true) {
      try {
        result = await callback(argument);
        break;
      } catch (error) {
        this.print(error.message);
      }
    }
    return result;
  }

  async getMoneyInput() {
    const lottoUtils = new LottoUtils();
    const money = await MissionUtils.Console.readLineAsync(INPUT.getMoney);
    lottoUtils.checkMoneyInput(money);
    // this.#lottoUtils.checkMoneyInput(money);

    return parseInt(money);
  }

  async getWinInput() {
    const lottoUtils = new LottoUtils();
    const winString = await MissionUtils.Console.readLineAsync(INPUT.getWin);
    lottoUtils.checkWinInput(winString);
    // this.#lottoUtils.checkWinInput(winString);
    const winArray = winString.split(',');

    return winArray;
  }

  async getBonusInput(win) {
    const lottoUtils = new LottoUtils();
    const bonus = await MissionUtils.Console.readLineAsync(INPUT.getBonus);
    lottoUtils.checkBonusInput(bonus, win);
    // this.#lottoUtils.checkBonusInput(bonus, win);

    return parseInt(bonus);
  }

  printLottos(lottos) {
    const lottosCount = lottos.length;
    this.print(`\n${lottosCount}개를 구매하였습니다.`);

    for (let i = 0; i < lottosCount; i++) {
      this.print(lottos[i].toString());
    }
  }
}
