import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottos = this.makeLottos(purchaseAmount);
    this.printLottos(lottos);
  }
  async getPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return parseInt(purchaseAmount);
  }
  makeLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }
  printLottos(lottos) {
    MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
    for (const lotto of lottos) {
      MissionUtils.Console.print(lotto.getNumbers());
    }
  }
}

export default App;
