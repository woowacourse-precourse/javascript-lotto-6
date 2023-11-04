import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printUserLottos(lottos) {
    lottos.forEach((lotto) => {
      this.print(lotto);
    });
  },
};

export default OutputView;
