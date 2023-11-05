import prompt from './prompt.js';
import { totalReward } from '../constants.js';

class Notice {
  static totalLotto(lottos, quantity) {
    prompt.out(`${quantity}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      prompt.out(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static finalProfit(profit, prizeResult) {
    prompt.out('\n당첨 통계\n---');
    const prizeCount = Object.values(prizeResult).reverse();
    totalReward.forEach((rank, index) => {
      prompt.out(`${rank}${prizeCount[index]}개`);
    });
    prompt.out(`총 수익률은 ${profit}%입니다.`);
  }
}

export default Notice;
