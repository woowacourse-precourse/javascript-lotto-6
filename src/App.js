import { Console } from "@woowacourse/mission-utils";
import System from "./System";

class App {
  async play() {
    const system = new System();
    const money = await system.getMoney();
    const lottoCount = await system.getLottoCount(money);
    Console.print(`${lottoCount}개를 구매했습니다.`);

    const lottos = await system.purchaseAndPrintLottos(money);
    const [lottoNumbers, lotto] = await system.getLotto();
  }
}

export default App;
