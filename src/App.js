import { Console } from "@woowacourse/mission-utils";
import { validatePayment } from "./ValidateInput";

class App {
  async play() {
    await this.readPayment();
  }

  async readPayment() {
    while (true) {
      try {
        const payment = Input.readPayment();
        validatePayment(payment);
        return Number(payment);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
