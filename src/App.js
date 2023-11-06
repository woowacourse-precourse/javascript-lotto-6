/* eslint-disable no-confusing-arrow */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from "@woowacourse/mission-utils";
import { BASE_AMOUNT, INPUT_MESSAGE } from "./utils/CONSTANT.js";
import {
  validateBonusNumber,
  validatePurchase,
  validateWinningNumber,
} from "./utils/validation.js";
import Lotto from "./Lotto.js";
import { printPurchaseResults, printResults } from "./utils/consoleOutput.js";

class App {
  #purchaseAmount;

  #tickets;

  #winningNumbers;

  #bonusNumber;

  #result;

  #totalProfit;

  constructor() {
    this.#tickets = [];
    this.#result = [];
  }

  async inputPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmount,
    );

    try {
      validatePurchase(input);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.inputPurchaseAmount();
      return;
    }

    this.#purchaseAmount = Number(input);
  }

  createLottoTickets(ticketCount) {
    for (let i = 0; i < ticketCount; i += 1) {
      this.#tickets.push(new Lotto(this.createTicket()));
    }
  }

  createTicket() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async startPurchase() {
    await this.inputPurchaseAmount();
    const ticketCount = this.#purchaseAmount / BASE_AMOUNT;
    this.createLottoTickets(ticketCount);
    printPurchaseResults(ticketCount, this.#tickets);
  }

  async inputWinningNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.winningNumbers,
    );

    try {
      validateWinningNumber(input);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.inputWinningNumber();
      return;
    }

    this.#winningNumbers = input.split(",").map((number) => Number(number));
  }

  async inputBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.bonusNumber,
    );

    try {
      validateBonusNumber(this.#winningNumbers, input);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.inputBonusNumber();
      return;
    }

    this.#bonusNumber = Number(input);
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
        this.#result = this.#result.concat(result.rank);
        return acc + result.prize;
      }
      return acc;
    }, initValue);
  }

  calcTotalProfitPercentage() {
    return (this.#totalProfit / this.#purchaseAmount) * 100;
  }

  getResult() {
    this.matchLotteryResults();
    const profitPercentage = this.calcTotalProfitPercentage();
    printResults(this.#result, profitPercentage);
  }

  async play() {
    await this.startPurchase();
    await this.makeWinningNumber();
    this.getResult();
  }
}

export default App;
