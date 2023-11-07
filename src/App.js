import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";
import { Lotto } from "./Lotto";

class App {
  #amount;
  constructor() {
    this.#amount = 0;
  }

  #validate(amount) {
    if (isNaN(amount) || amount < 0) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (amount % 1000 !== 0) {
      throw new Error(ERROR.INVALID_AMOUNT);
    }
  }

  inputPurchaseAmount = async () => {
    try {
      const amount = parseInt(
        await Console.readLineAsync(GAME.INPUT.AMOUNT),
        10
      );
      this.#validate(amount);
      this.#amount = amount;
    } catch (error) {
      console.error(error.message);
      this.inputPurchaseAmount();
    }
  };

  async play() {}
}

export default App;
