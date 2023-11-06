/* eslint-disable no-confusing-arrow */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BASE_AMOUNT,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  RANKS,
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

  #result;

  #totalProfit;

  constructor() {
    this.#tickets = [];
    this.#result = [...RANKS.map((rank) => ({ ...rank, count: 0 }))];
  }

  async inputPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmount,
    );

    validatePurchase(input);

    this.#purchaseAmount = parseInt(input, 10);
    this.#ticketCount = this.#purchaseAmount / BASE_AMOUNT;
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

  matchLotteryResults() {
    const initValue = 0;

    this.#totalProfit = this.#tickets.reduce((acc, ticket) => {
      const result = ticket.match(this.#winningNumbers, this.#bonusNumber);
      if (result !== undefined) {
        this.#result = this.#result.map((rank) =>
          rank.rank === result.rank ? { ...rank, count: rank.count + 1 } : rank,
        );
        return acc + result.prize;
      }
      return acc;
    }, initValue);
  }

  getResult() {
    this.matchLotteryResults();
  }

  async play() {
    await this.startPurchase();
    await this.makeWinningNumber();
    this.getResult();
  }
}

export default App;
