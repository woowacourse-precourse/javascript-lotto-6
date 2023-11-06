import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  buyLotto(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },

  issuedLotto(lotto) {
    Console.print(`[${lotto.sort((a, b) => a - b).join(', ')}]`);
  },

  result(rankMap, earningsPercent) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${rankMap[0]}개\n4개 일치 (50,000원) - ${rankMap[1]}개\n5개 일치 (1,500,000원) - ${rankMap[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankMap[3]}개\n6개 일치 (2,000,000,000원) - ${rankMap[4]}개`);
    Console.print(`총 수익률은 ${earningsPercent}%입니다.`);
  }
}

export default OutputView;