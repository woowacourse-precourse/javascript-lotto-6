import { read, write } from './IO.js';
import Validator from './Validator.js';

const TEXT = {
  BET: '구입 금액을 입력해 주세요. ',
  NUM_WIN: '당첨 번호를 입력해 주세요. ',
  NUM_BONUS: '보너스 번호를 입력해 주세요. ',
};

const STAT = {
  MATCH_3: '3개 일치 (5,000원) - ',
  MATCH_4: '4개 일치 (50,000원) - ',
  MATCH_5: '5개 일치 (1,500,000원) - ',
  MATCH_5_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_6: '6개 일치 (2,000,000,000원) - ',
  MATCH_SUFFIX: '개',

  RATE_PREFIX: '총 수익률은 ',
  RATE_SUFFIX: '%입니다.',
};

class Controls {
  static async getBet() {
    while (true) {
      try {
        const bet = await read(TEXT.BET);
        Validator.validateBet(bet);
        return bet;
      } catch (err) {
        write(err.message);
      }
    }
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
    while (true) {
      try {
        let win = (await read(TEXT.NUM_WIN)).split(',').map(Number);
        Validator.validateNumbers(win);

        let bonus = await read(TEXT.NUM_BONUS);
        Validator.validateBonus(win, bonus);

        return [win, bonus];
      } catch (err) {
        write(err.message);
      }
    }
  }

  static printStatistics(matchCounter, rate) {
    write(`${STAT.MATCH_3}${matchCounter[0]}${STAT.MATCH_SUFFIX}`);
    write(`${STAT.MATCH_4}${matchCounter[1]}${STAT.MATCH_SUFFIX}`);
    write(`${STAT.MATCH_5}${matchCounter[2]}${STAT.MATCH_SUFFIX}`);
    write(`${STAT.MATCH_5_BONUS}${matchCounter[3]}${STAT.MATCH_SUFFIX}`);
    write(`${STAT.MATCH_6}${matchCounter[4]}${STAT.MATCH_SUFFIX}`);

    write(`${STAT.RATE_PREFIX}${rate}${STAT.RATE_SUFFIX}`);
  }
}

export default Controls;
