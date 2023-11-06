import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/Messages.js';

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
    Console.print(
      `\n${this.numOfLottos}` + OUTPUT_MESSAGE.OUTPUT_NUM_OF_LOTTOS
    );
  }

  printCreatedLottos() {
    this.createdLottos.map((e) => {
      Console.print(`[${e.join(', ')}]`);
    });
  }
}

export default Lottos;
