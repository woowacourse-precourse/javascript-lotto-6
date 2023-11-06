import { MissionUtils } from "@woowacourse/mission-utils";
import publishUtils from "../utils/publishUtils.js";
import outputs from "../domains/outputs.js";

class Publish {
  #amount;

  constructor(price) {
    this.#amount = publishUtils.calculateAmount(price);
  }

  // 발행한 로또 수량 출력
  printAmount() {
    outputs.printAmountOfLotto(this.#amount);
  }

  // 로또 번호 랜덤 생성
  publishLotto() {
    const publishedLottos = [];
    for (let i = 0; i < this.#amount; i++) {
      const randomLottoNums = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      publishedLottos.push(publishUtils.createLotto(randomLottoNums));
    }
    return publishedLottos;
  }

  // 로또 번호 출력
  printLottos(publishedLottos) {
    outputs.printLottos(publishedLottos);
  }
}

export default Publish;
