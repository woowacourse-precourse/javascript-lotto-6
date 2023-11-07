import { MissionUtils } from '@woowacourse/mission-utils';
import { CashCount } from './CashCount.js';

//로또 번호 생성
export class LottoMachine {
  constructor() {
    this.lottos = [];
  }

  generateLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    this.lottos.push(lotto);
    MissionUtils.Console.print(lotto);
  }

  buyLottos(cash) {
    const cashCount = new CashCount(cash).count;
    MissionUtils.Console.print(`${cashCount}개를 구매했습니다.`);
    for (let count = 1; count <= cashCount; count++) {
      this.generateLotto();
    }

    return this.lottos;
  }
}
