import { MissionUtils } from '@woowacourse/mission-utils';

//로또 번호 생성
export class LottoMachine {
  constructor() {
    this.lottos = [];
  }

  generateLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    this.lottos.push(lotto.sort((a, b) => a - b));
  }

  printLottos(lottos) {
    this.lottos.forEach((lotto) => {
      MissionUtils.Console.print(JSON.stringify(lotto).replace(/,/g, ', '));
    });
  }

  buyLottos(cashCount) {
    MissionUtils.Console.print(`${cashCount}개를 구매했습니다.`);
    for (let count = 1; count <= cashCount; count++) {
      this.generateLotto();
    }
    this.printLottos();
    return this.lottos;
  }
}
