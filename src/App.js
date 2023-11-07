import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { validatePurchaseFormat } from "./validation/validation.js";
import { INPUT_MSG } from "./constants/InputMessage.js";

class App {
  #generatedLottoNums;

  constructor() {
    this.ticketsAmount = 0;
    this.matchingTotalNumber = 0;
    this.matchingTickets = 0;
    this.#generatedLottoNums = [];
    this.inputedLottoNums = [];
  }
  async play() {
    await this.purchaseTicket();
    await this.generateNumbers();
    await this.inputLotteryResults();
    this.matchingNumbers(this.#generatedLottoNums, this.inputedLottoNums);
    console.log(this.matchingTotalNumber, "matching total number");
    console.log(this.matchingTickets, "matching tickets ");
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

      this.#generatedLottoNums.push(lottoNums);
      await Console.print(stringifyNums);
      // this.#generatedLottoNums = this.#generatedLottoNums.concat(lottoNums);
    }

    // this.matchingNumbers(this.#generatedLottoNums, this.inputedLottoNums);
  }
  async inputLotteryResults() {
    const results = await Console.readLineAsync(INPUT_MSG.results);
    const resultsArray = results.split(",").map(Number);
    const validateNums = new Lotto(resultsArray);

    // console.log(resultsArray, "inputed results");
    this.inputedLottoNums = this.inputedLottoNums.concat(resultsArray);

    // this.inputedLottoNums.push(resultsArray);
    Console.print(resultsArray);
  }

  matchingNumbers(generated, inputed) {
    for (const ticket of generated) {
      let isValidLottery = false;
      console.log(ticket, "const ticket of ticket result");
      for (const num of inputed) {
        if (ticket.includes(num)) {
          console.log(num, "matching num");
          this.matchingTotalNumber++;
          isValidLottery = true;
        }
      }
      if (isValidLottery) {
        this.matchingTickets++;
      }
    }
  }
}

export default App;
