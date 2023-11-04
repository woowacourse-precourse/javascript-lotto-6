import { MissionUtils } from '@woowacourse/mission-utils';

const OutputView = {
  printQuantity(quantity) {
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(JSON.stringify(lotto).replace(/,/g, ', '));
    });
  },
};

export default OutputView;
