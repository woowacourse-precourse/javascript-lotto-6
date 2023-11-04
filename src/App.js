import { Console } from "@woowacourse/mission-utils";
import System from "./System";

class App {
  async play() {
    const system = new System();
    const money = await system.getMoney();
    const lottoCount = await system.getLottoCount(money);
    Console.print(`${lottoCount}개를 구매했습니다.`);

    // const lottos = system.purchaseAndPrintLottos();
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = system.saveLottoNumbers();
      system.printLottoNumbers(lotto);
      lottos.push(lotto);
    }
  }
}

export default App;
