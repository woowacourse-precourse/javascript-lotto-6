import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/Messages.js';
import { NUM } from '../constant/Number.js';

class Lottos {
  constructor(buyMoney) {
    this.numOfLottos = buyMoney / 1000;
    this.createdLottos = [];
    this.createLottos();
  }

  createLottos() {
    for (let i = 0; i < this.numOfLottos; i++) {
      this.createdLottos.push(
        MissionUtils.Random.pickUniqueNumbersInRange(
          NUM.LOTTO_MINNUM,
          NUM.LOTTO_MAXNUM,
          NUM.LOTTO_LENGTH
        ).sort((a, b) => a - b)
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
