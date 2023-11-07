import { Console } from "@woowacourse/mission-utils";
import { validatePayment } from "./ValidateInput.js";
import { paymentToLottoCount } from "./utils/lotto.js";
import Input from "./Input.js";

class App {
  async play() {
    const payment = await this.readPayment();
  }

  async readPayment() {
    while (true) {
      try {
        const payment = await Input.readPayment();
        validatePayment(payment);
        return Number(payment);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
