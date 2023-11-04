import { Console, Random } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/inputMessage.js";
import Lottos from "./Lottos.js";

class App {
  lottos;

  async play() {
    await this.gameStart();
  }

  async gameStart() {
    await this.getLottoPrice();
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
}

export default App;
