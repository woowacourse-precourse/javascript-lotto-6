import { MissionUtils } from "@woowacourse/mission-utils";
import { BASEAMOUNT, INPUT_MESSAGE, OUTPUT_MESSAGE } from "./utils/CONSTANT.js";
import { validatePurchase } from "./utils/validation.js";

class App {
  #purchaseAmount;
  #ticketCount;
  #tickets;

  constructor() {
    this.#tickets = [];
  }

  async inputPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmount,
    );

    validatePurchase(input);

    this.#purchaseAmount = input;
    this.#ticketCount = parseInt(input) / BASEAMOUNT;
  }

  createLottoTickets() {
    for (let i = 0; i < this.#ticketCount; i += 1) {
      this.#tickets.push(this.createTicket());
    }
    MissionUtils.Console.print(this.#tickets);
  }

  createTicket() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printPurchaseResults() {
    MissionUtils.Console.print(
      this.#ticketCount + OUTPUT_MESSAGE.purchaseResult,
    );
    MissionUtils.Console.print(OUTPUT_MESSAGE.divide);
  }

  async startPurchase() {
    await this.inputPurchaseAmount();
    this.createLottoTickets();
    this.printPurchaseResults();
  }

  async play() {
    await this.startPurchase();
  }
}

export default App;
