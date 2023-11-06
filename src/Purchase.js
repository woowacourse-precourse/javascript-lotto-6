import {
  checkInputTypeIsNumber,
  checkInputDividedBy1000,
} from "./Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Purchase {
  #purchasePrice; //purchasePrice: 구입금액
  #lottos;

  constructor(purchasePrice) {
    //구입금액
    this.#validatePurchasePrice(purchasePrice);
    this.#purchasePrice = purchasePrice;
    this.buyLottos(purchasePrice / 1000);
  }

  getLottos() {
    return this.#lottos;
  }

  #validatePurchasePrice(purchasePrice) {
    checkInputTypeIsNumber(purchasePrice);
    checkInputDividedBy1000(purchasePrice);
  }

  buyLottos(numberOfLotto) {
    const tmpLottos = [];
    let str = "";
    str += `\n${numberOfLotto}개를 구매했습니다.\n`;
    for (let i = 0; i < numberOfLotto; i++) {
      const randoms = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randoms);
      tmpLottos.push(lotto);
      str += `${lotto.print()}\n`;
    }
    str += "\n";
    MissionUtils.Console.print(str);
    this.#lottos = tmpLottos.sort((a, b) => a - b);
  }

  checkLottos(winning) {
    const result = new Array(5).fill(0);

    this.#lottos.forEach((lotto) => {
      const rank = lotto.checkWinning(winning);
      if (rank !== 0) result[rank - 1]++;
    });

    const profit =
      5000 * result[4] +
      50000 * result[3] +
      1500000 * result[2] +
      30000000 * result[1] +
      30000000 * result[0];

    let str = `\n당첨 통계\n---\n3개 일치 (5,000원) - ${result[4]}개\n4개 일치 (50,000원) - ${result[3]}개\n5개 일치 (1,500,000원) - ${result[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[1]}개\n6개 일치 (2,000,000,000원) - ${result[0]}개`;
    MissionUtils.Console.print(str);
    MissionUtils.Console.print(
      `총 수익률은 ${((profit / this.#purchasePrice) * 100).toFixed(1)}%입니다.`
    );
  }
}

export default Purchase;
