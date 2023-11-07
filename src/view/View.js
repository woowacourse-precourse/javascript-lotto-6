import { MissionUtils } from '@woowacourse/mission-utils';

export default class View {
  async readLine(message) {
    return MissionUtils.Console.readLineAsync(message);
  }

  printLottos(lottos) {
    const lottosCount = lottos.length;
    MissionUtils.Console.print(`\n${lottosCount}개를 구매하였습니다.`);

    for (let i = 0; i < lottosCount; i++) {
      MissionUtils.Console.print(lottos[i].toString());
    }
  }
}
