import { Console, Random } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/inputMessage.js";
import { RESULT_MESSAGE } from "./constants/resultMessage.js";
import Lottos from "./Lottos.js";

class App {
  lottos;

  async play() {
    await this.gameStart();
  }

  async gameStart() {
    await this.getLottoPrice();
    this.printLottos();
  }

  async getLottoPrice() {
    const lottoPriceInput = await Console.readLineAsync(INPUT_MESSAGE.price);

    try {
      this.lottos = new Lottos(lottoPriceInput);
    } catch (error) {
      Console.print(error.message);
      await this.getLottoPrice();
    }
  }

  printLottos() {
    const lottoPrice = this.lottos.getLottoPrice();

    Console.print(RESULT_MESSAGE.count(lottoPrice / 1000));

    for (let i = 0; i < lottoPrice / 1000; i++) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      lotto = lotto.sort((a, b) => a - b);

      Console.print(`[${lotto.join(", ")}]`);

      this.lottos.setLottos(lotto);
    }
  }
}

export default App;
