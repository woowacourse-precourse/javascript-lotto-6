import { read, write } from './IO.js';
import Validator from './Validator.js';
import Lotto from './Lotto.js';

const TEXT = {
  BET: '구입 금액을 입력해 주세요. ',
  NUM_WIN: '당첨 번호를 입력해 주세요. ',
  NUM_BONUS: '보너스 번호를 입력해 주세요. ',
};

class Controls {
  static async getBet() {
    const bet = await read(TEXT.BET);
    Validator.validateBet(bet);

    return bet;
  }

  static printLottos(lottos) {
    const amount = lottos.length;
    write(`${amount}개를 구매했습니다.`);

    for (const lotto of lottos) {
      const numbers = lotto.getNumbers().join(', ');
      write(`[${numbers}]`);
    }
  }

  static async writeWin() {
    let win = (await read(TEXT.NUM_WIN)).split(',').map(Number);
    Validator.validateNumbers(win);

    let bonus = await read(TEXT.NUM_BONUS);
    Validator.validateBonus(win, bonus);

    return [win, bonus];
  }
}

export default Controls;
