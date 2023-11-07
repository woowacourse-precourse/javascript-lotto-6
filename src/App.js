import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";
import Lotto from "./Lotto";

class App {
  constructor() {
    this.amount = 0;
    this.lottos = [];
  }

  validateAmount = (amount) => {
    if (isNaN(amount) || amount < 0) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (amount % 1000 !== 0) {
      throw new Error(ERROR.INVALID_AMOUNT);
    }
  };

  inputPurchaseAmount = async () => {
    try {
      const amount = parseInt(
        await Console.readLineAsync(GAME.INPUT.AMOUNT),
        10
      );
      this.validateAmount(amount);
      this.amount = amount / 1000;
    } catch (error) {
      console.error(error.message);
      this.inputPurchaseAmount();
    }
    return this.amount;
  };

  generateLottosList = (amount) => {
    Console.print(`${this.amount}개를 구입했습니다.\n`);
    for (let i = 0; i < amount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
      Console.print(lotto.toString());
    }
  };

  async play() {
    const amount = await this.inputPurchaseAmount();
    this.generateLottosList(amount);
  }
}

export default App;
