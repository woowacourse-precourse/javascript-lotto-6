import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import IOController from './io/IO.controller.js';
import { TICKET_PRICE } from './constants.js';

export default class AppService {
  #IOController;

  constructor() {
    this.#IOController = new IOController();
  }

  async setting() {
    const NUMBER_OF_TICKETS = await this.#getNumberOfTickets();
    const PURCHASED_TICKETS = this.#buyTickets(NUMBER_OF_TICKETS);
    const WINNING_LOTTO_NUMBERS = await this.#getWinningNumbers();
    this.#printHitStatistics(PURCHASED_TICKETS, WINNING_LOTTO_NUMBERS);
  }

  #printHitStatistics(purchased, { winningNumbers, bonusNumber }) {
    this.#IOController.printStatIntro();
    const hits = purchased.reduce((acc, ticket) => {
      const RANK = ticket.findRank({ winningNumbers, bonusNumber });
      acc[RANK] += 1;
      return acc;
    }, new Array(6).fill(0));
    this.#IOController.printHitStatistics(hits);
    this.#printRateOfReturn(hits, purchased.length * TICKET_PRICE);
  }

  #printRateOfReturn(hits, paid) {
    const PRICES = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    const TOTAL = hits.reduce((acc, count, index) => {
      acc += count * PRICES[index];
      return acc;
    }, 0);
    const RATE = ((TOTAL / paid) * 100).toFixed(1);
    this.#IOController.printRateOfReturn(RATE);
  }

  async #getNumberOfTickets() {
    const MONEY = await this.#IOController.readAmount();
    return Math.floor(MONEY / TICKET_PRICE);
  }

  #buyTickets(count) {
    this.#IOController.printTicketCount(count);
    const purchased = [];
    for (let i = 0; i < count; ++i) {
      const NUMBERS = this.pickNumbers();
      purchased.push(new Lotto(NUMBERS));
      this.#IOController.printTicket(NUMBERS);
    }
    return purchased;
  }

  pickNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  async #getWinningNumbers() {
    const result = {
      winningNumbers: null,
      bonusNumber: null,
    };
    result.winningNumbers = await this.#IOController.readWinningNumbers();
    result.bonusNumber = await this.#IOController.readBonusNumber(
      result.winningNumbers
    );
    return result;
  }
}
