import { MissionUtils } from '@woowacourse/mission-utils';

export default class View {
  async readLine(message) {
    return MissionUtils.Console.readLineAsync(message);
  }

  printLottos(lottos) {
    const lottosCount = lottos.length;
    MissionUtils.Console.print(`${lottosCount}개를 구매했습니다.`);

    for (let i = 0; i < lottosCount; i++) {
      MissionUtils.Console.print(lottos[i].toString());
    }
  }

  print(message) {
    MissionUtils.Console.print(message);
  }

  printStatistics(data) {
    this.print('\n당첨 통계');
    this.print('---');
    this.print(`3개 일치 (5,000원) - ${data.match3}개`);
    this.print(`4개 일치 (50,000원) - ${data.match4}개`);
    this.print(`5개 일치 (1,500,000원) - ${data.match5}개`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${data.bonus}개`);
    this.print(`6개 일치 (2,000,000,000원) - ${data.match6}개`);
    this.print(`총 수익률은 ${data.ratio}%입니다.`);
  }
}
