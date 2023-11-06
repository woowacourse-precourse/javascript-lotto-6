import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { validatePurchaseFormat } from "./validation/validation.js";
import { INPUT_MSG } from "./constants/InputMessage.js";
import PurchaseLottery from "./PurchaseLottery.js";
class App {
  async play() {
    await this.purchaseTicket();
    await this.inputLotteryResults();
  }

  async purchaseTicket() {
    let ticketsAmount = await Console.readLineAsync(INPUT_MSG.amount);
    validatePurchaseFormat(ticketsAmount);
    ticketsAmount = Math.floor(ticketsAmount / 1000);

    await this.generateNumbers(ticketsAmount);
  }
  async generateNumbers(ticketQuantity) {
    for (let i = 0; i < ticketQuantity; i++) {
      const lottoNums = await Random.pickUniqueNumbersInRange(1, 45, 6);
      if (lottoNums.length > 6) {
        throw new Error("[ERROR]");
      }
      Console.print(lottoNums);
    }
    await Console.print(`${ticketQuantity}개를 구매했습니다.`);
  }
  async inputLotteryResults() {
    const results = await Console.readLineAsync(INPUT_MSG.results);
    const resultsArray = results.split(",").map(Number);
    new Lotto(resultsArray);
    Console.print(resultsArray);
  }
}

export default App;
