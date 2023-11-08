import { MissionUtils } from '@woowacourse/mission-utils';

export default class Printer {
  static printPublishInfo(quantity, lottos) {
    Printer.printPublishQuantity(quantity);
    Printer.printPublishLottos(lottos);
  }

  static printPublishLottos(lottos) {
    lottos.forEach((lotto) => MissionUtils.Console.print(`[${lotto.join(',')}]`));
  }

  static printPublishQuantity(quantity) {
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
  }
}
