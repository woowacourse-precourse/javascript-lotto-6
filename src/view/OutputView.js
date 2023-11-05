import { MissionUtils } from '@woowacourse/mission-utils';

const { Console } = MissionUtils;

class OutputView {
  static printLottos(count, lottos) {
    Console.print(`${count}개를 구매했습니다. \n`);
    lottos.forEach((lotto) => {
      Console.print(lotto.numbers);
      Console.print('\n');
    });
  }

  static printResult() {}
}
export default OutputView;
