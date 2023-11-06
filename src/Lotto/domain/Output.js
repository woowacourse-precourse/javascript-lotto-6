import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static lottoNumbers(lottoCount, target) {
    MissionUtils.Console.print(`${lottoCount / 1000}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount / 1000; i++) {
      MissionUtils.Console.print(target[i]);
    }
  }
}

export default Output;
