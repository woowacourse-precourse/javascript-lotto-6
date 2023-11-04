import { MissionUtils } from '@woowacourse/mission-utils';

export default class GameView {
  async printGameMessage(message) {
    await MissionUtils.Console.print(message);
  }

  async printLottos(lottos, lottoCount) {
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      const num = lotto.getLottoNumber();
      MissionUtils.Console.print(`[${num.join(', ')}]`);
    });
  }

  async printWinningNumber(number) {
    MissionUtils.Console.print(number);
  }
}
