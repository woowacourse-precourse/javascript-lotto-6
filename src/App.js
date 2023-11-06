import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { validatePurchaseFormat } from "./validation/validation.js";
import { INPUT_MSG } from "./constants/InputMessage.js";

class App {
  constructor() {
    this.ticketsAmount = 0;
    this.count = 0;
    this.generatedLottoNums = [];
    this.inputedLottoNums = [];
  }
  async play() {
    await this.purchaseTicket();
    await this.generateNumbers();
    await this.inputLotteryResults();
    this.matchingNumbers(this.generatedLottoNums, this.inputedLottoNums);
  }

  async purchaseTicket() {
    const ticketsAmount = await Console.readLineAsync(INPUT_MSG.amount);
    validatePurchaseFormat(ticketsAmount);

    this.ticketsAmount = Math.floor(ticketsAmount / 1000);
    await Console.print(`${this.ticketsAmount}개를 구매했습니다.`);
  }
  async generateNumbers() {
    for (let i = 0; i < this.ticketsAmount; i++) {
      const lottoNums = await Random.pickUniqueNumbersInRange(1, 45, 6);
      const stringifyNums = `[${lottoNums.join(", ")}]`;
      if (lottoNums.length > 6) {
        throw new Error("[ERROR]");
      }
      this.generatedLottoNums.push(lottoNums);
      await Console.print(stringifyNums);
    }
  }
  async inputLotteryResults() {
    const results = await Console.readLineAsync(INPUT_MSG.results);
    const resultsArray = results.split(",").map(Number);
    const validateNums = new Lotto(resultsArray);
    this.inputedLottoNums.push(resultsArray);
    Console.print(resultsArray);
  }

  matchingNumbers(generated, inputed) {
    for (let i = 0; i < generated.length; i++) {
      for (let j = 0; j < inputed.length; j++) {
        if (generated[i] === inputed[j]) {
          this.count += 1;
          Console.print(this.count);
        }
      }
    }
  }
}

export default App;
