/* eslint-disable no-confusing-arrow */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BASE_AMOUNT,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
} from "./utils/CONSTANT.js";
import {
  validateBonusNumber,
  validatePurchase,
  validateWinningNumber,
} from "./utils/validation.js";
import Lotto from "./Lotto.js";

class App {
  #purchaseAmount;

  #ticketCount;

  #tickets;

  #winningNumbers;

  #bonusNumber;

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
      this.#tickets.push(new Lotto(this.createTicket()));
    }
  }

  createTicket() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printPurchaseResults() {
    MissionUtils.Console.print(
      this.#ticketCount + OUTPUT_MESSAGE.purchaseResult,
    );
    // MissionUtils.Console.print(OUTPUT_MESSAGE.divide);
    this.#tickets.forEach((ticket) =>
      MissionUtils.Console.print(`[${ticket.numbers.join(", ")}]`),
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

    this.#winningNumbers = input
      .split(",")
      .map((number) => parseInt(number, 10));
  }

  async inputBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.bonusNumber,
    );

    validateBonusNumber(this.#winningNumbers, input);

    this.#bonusNumber = parseInt(input, 10);
  }

  async makeWinningNumber() {
    await this.inputWinningNumber();
    await this.inputBonusNumber();
  }

  async play() {
    await this.startPurchase();
    await this.makeWinningNumber();
  }
}

export default App;
