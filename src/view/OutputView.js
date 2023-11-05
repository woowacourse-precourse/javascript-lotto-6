import { MissionUtils } from '@woowacourse/mission-utils';
import { Place } from '../utils/Place.js';

const { Console } = MissionUtils;

class OutputView {
  static printLottos(count, lottos) {
    Console.print(`\n${count}개를 구매했습니다.\n`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });
    Console.print('\n');
  }

  static printResult() {
    Console.print('당첨 통계\n');
    Console.print('---\n');
    Console.print(`3개 일치 (5,000원) - ${Place['5th']}개\n`);
    Console.print(`4개 일치 (50,000원) - ${Place['4th']}개\n`);
    Console.print(`5개 일치 (1,500,000원) - ${Place['3rd']}개\n`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${Place['2nd']}개\n`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${Place['1st']}개\n`);
    Console.print(`총 수익률은 ${Place.profit}%입니다.`);
  }
}
export default OutputView;
