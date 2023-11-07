import { Console, Random } from "@woowacourse/mission-utils";
import Money from "./Money.js";
import GAME_MESSAGES from "./constants/GameMessages.js";

class App {
  async play() {
    const money = new Money();
    const userMoney = await money.userMoney();
    const lottoCount = userMoney / 1000;
    Console.print(`\n${lottoCount}${GAME_MESSAGES.COUNT_LOTTO}`);
    Console.print(this.generateLottoNumber(lottoCount))
  }

  generateLottoNumber(lottoCount) {
    let lottos = [lottoCount];
    for (let i = 0; i < lottoCount; i += 1) {
      lottos[i] = Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    for (let i = 0; i < lottos.length; i += 1) {
      lottos[i].sort((a, b) => {
        return a - b;
      });
    }

    return lottos;
  }
}

export default App;
