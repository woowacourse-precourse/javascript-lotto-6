import { read, write } from './IO.js';
import Validator from './Validator.js';

const TEXT = {
  BET: '구입 금액을 입력해 주세요. ',
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
}

export default Controls;
