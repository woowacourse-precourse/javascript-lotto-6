/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BASE_AMOUNT,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
} from "./utils/CONSTANT.js";
import { validatePurchase, validateWinningNumber } from "./utils/validation.js";

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
    this.#ticketCount = parseInt(input, 10) / BASE_AMOUNT;
  }

  createLottoTickets() {
    for (let i = 0; i < this.#ticketCount; i += 1) {
      this.#tickets.push(this.createTicket());
    }
  }

  createTicket() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printPurchaseResults() {
    MissionUtils.Console.print(
      this.#ticketCount + OUTPUT_MESSAGE.purchaseResult,
    );
    MissionUtils.Console.print(OUTPUT_MESSAGE.divide);
    this.#tickets.forEach((ticket) =>
      MissionUtils.Console.print(ticket.sort((a, b) => a - b)),
    );
  }

  async startPurchase() {
    await this.inputPurchaseAmount();
    this.createLottoTickets();
    this.printPurchaseResults();
  }

  async inputWinningNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.winningNumbers,
    );
    validateWinningNumber(input);
  }

  async makeWinningNumber() {
    await this.inputWinningNumber();
  }

  async play() {
    await this.startPurchase();
    await this.makeWinningNumber();
  }
}

export default App;
