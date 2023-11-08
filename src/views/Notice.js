import prompt from './prompt.js';
import { totalReward, NOTICE } from '../constants.js';

class Notice {
  static totalLotto(lottos, quantity) {
    prompt.out(NOTICE.lotto(quantity));
    lottos.forEach((lotto) => {
      prompt.out(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static finalProfit(profit, prizeResult) {
    prompt.out(NOTICE.FINAL_RESULT);
    totalReward.forEach((rank, index) => {
      prompt.out(NOTICE.lottoRecord(rank, prizeResult, index));
    });
    prompt.out(NOTICE.final(profit));
  }
}

export default Notice;
