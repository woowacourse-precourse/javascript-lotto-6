import prompt from './prompt.js';
import { NUMBER } from './constants.js';

class Notice {
  static totalLotto(lottos, quantity) {
    prompt.out(`${quantity}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      prompt.out(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static finalProfit(profit, prizeResult) {
    prompt.out('당첨 통계\n---');
    // prompt.out('---');
    prompt.out(`${NUMBER.THREE}개 일치 (5,000원) - ${prizeResult.fifth}개`);
    prompt.out(`${NUMBER.FOUR}개 일치 (50,000원) - ${prizeResult.fourth}개`);
    prompt.out(`${NUMBER.FIVE}개 일치 (1,500,000원) - ${prizeResult.third}개`);
    prompt.out(`${NUMBER.FIVE}개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeResult.second}개`);
    prompt.out(`${NUMBER.SIX}개 일치 (2,000,000,000원) - ${prizeResult.first}개`);
    prompt.out(`총 수익률은 ${profit}%입니다.`);
  }
}

export default Notice;
