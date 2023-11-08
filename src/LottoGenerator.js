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

  async printLottos() {
    Console.print("\n" + this.count + "개를 구매했습니다.")
    //for (let i = 0; i < this.lottos.length; i++) {
    //  const lotto = this.lottos[i];
    //  for (let j = 0; i < lotto.length; j++)
    //    Console.print(`[${lotto[j].join(", ")}]`);
    //}
    for (let lotto of this.lottos)
    {
      //Console.print("here");
      lotto.printNumbers();

    }
  }

  async lottoGenerator() {
    for (let i = 0; i < this.count; i++) {
      const num = Random.pickUniqueNumbersInRange(1, 45, 6);

      num.sort((a, b) => a - b);
      this.lottos.push(new Lotto(num));
    }
  }
}
export default LottoGenerator;
