import { Console, MissionUtils } from '@woowacourse/mission-utils';

class Lottos {
  constructor(buyMoney) {
    this.numOfLottos = buyMoney / 1000;
    this.createdLottos = [];
    this.createLottos();
  }

  createLottos() {
    for (let i = 0; i < this.numOfLottos; i++) {
      this.createdLottos.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
    }
  }

  printNumOfLottos() {
    Console.print(`\n${this.numOfLottos}개를 구매했습니다.`);
  }

  printCreatedLottos() {
    this.createdLottos.map((e) => {
      Console.print(e);
    });
    Console.print('\n');
  }
}

export default Lottos;
