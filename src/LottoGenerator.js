import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator{
  constructor(price)
  {
    this.count = price / 1000;
    this.lottos = [];
    this.lottoGenerator();
    this.printLottos();
  }

  printLottos() {
    Console.print("");
    Console.print(`${this.count}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  lottoGenerator() {
    for (let i = 0; i < this.count; i++) {
      const num = Random.pickUniqueNumbersInRange(1, 45, 6);

      num.sort((a, b) => a - b);
      this.lottos.push(new Lotto(num));
    }
  }
}

export default LottoGenerator;
