import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottosCount(ticketCount) {
    Console.print(`${ticketCount}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().toString().split(',').join(', ');
      Console.print(`[${numbers}]`);
    });
  },
};

export default OutputView;
