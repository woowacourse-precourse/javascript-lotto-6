import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static print(message) {
    Console.print(message);
  }

  static printNewLine() {
    Console.print();
  }

  static printBuyingLottos(lottos) {
    OutputView.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto =>
      OutputView.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  static lottoOutcome({ first, second, third, fourth, fifth }) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${first}개`);
  }

  static lottoRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default OutputView;
