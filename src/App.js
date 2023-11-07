import { Console } from "@woowacourse/mission-utils";
import { validatePayment } from "./ValidateInput.js";
import { generateLottos, paymentToLottoCount } from "./utils/lotto.js";
import Input from "./Input.js";
import Output from "./Output.js";

class App {
  #payment;
  #lottoCount;

  constructor() {
    this.lottos = [];
  }

  async play() {
    await this.readPayment();
    this.lottoIssuance();
  }

  async readPayment() {
    while (true) {
      try {
        const payment = await Input.readPayment();
        validatePayment(payment);
        this.#payment = Number(payment);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  lottoIssuance() {
    this.#lottoCount = paymentToLottoCount(this.#payment);
    Output.writeLottoCount(this.#lottoCount);
    this.lottos = generateLottos(this.#lottoCount);
    this.lottos.forEach((lotto) => {
      lotto.print();
    });
  }
}

export default App;
