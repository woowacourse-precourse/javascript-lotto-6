import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const lottoAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    if (lottoAmount % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위입니다.");

    const lottos = this.buyLotto(lottoAmount);
  }

  buyLotto(amount) {
    const countLotto = amount / 1000;
    const lottoList = [];

    for (let i = 0; i < countLotto; i++) {
      const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(lottoNum);
      lottoList.push(lotto);
    }

    return lottoList;
  }
}

export default App;
