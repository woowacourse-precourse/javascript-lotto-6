import { MissionUtils } from "@woowacourse/mission-utils";

export default class GameView {
  async printGameMessage(message) {
    await MissionUtils.Console.print(message);
  }

  async printLottos(lottos, lottoCount) {
    let allLottos = `${lottoCount}개를 구매했습니다. \n`;
    lottos.forEach((lotto) => {
      const num = lotto.getLottoNumber();
      allLottos += `[${num}] \n`;
    });

    MissionUtils.Console.print(allLottos);
  }
}
