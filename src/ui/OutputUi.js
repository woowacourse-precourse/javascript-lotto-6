import { MissionUtils } from "@woowacourse/mission-utils";

class OutputUi {
  constructor() {}
  printPurchasedLottos(lottos) {
    const NUMBER_OF_LOTTOS = lottos.length;
    MissionUtils.Console.print(`\n${NUMBER_OF_LOTTOS}개를 구매했습니다.`);
    for (let i = 0; i < NUMBER_OF_LOTTOS; i++) {
      MissionUtils.Console.print(lottos[i]);
    }
    MissionUtils.Console.print("\n");
  }
}
export default OutputUi;
