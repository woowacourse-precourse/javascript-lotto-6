import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(',')}]`);
    });
  },
};

export default OutputView;
