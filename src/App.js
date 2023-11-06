import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { RANGE_MIN, RANGE_MAX, LOTTO_LENGTH, inputPrompts, keys } from './constants.js';
import { validatePurchase, validateBonusNumber, getEarnings, createScorekeeper, getScoreKey } from './utilities.js';

class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const tickets = this.createTickets(purchaseAmount);

    this.printTickets(tickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const results = this.getMatches(tickets, winningNumbers, bonusNumber);
    const profit = this.calculateProfit(purchaseAmount, results);

    return this.printResults(results, profit);
  }
  
  async getPurchaseAmount() {
    const input = await Console.readLineAsync(inputPrompts.PURCHASE);
    validatePurchase(input);
    return Number(input);
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync(inputPrompts.WINNING_NUMBERS);
    const numbers = input.split(',').map((number) => Number(number));
    const lotto = new Lotto(numbers);
    return lotto;
  }

  async getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(inputPrompts.BONUS_NUMBER);
    validateBonusNumber(winningNumbers, input);
    return Number(input);
  }

  createTickets(amount) {
    const ticketCount = amount / 1000;
    const ticketsPurchased = [];

    for (let i = 0; i < ticketCount; i += 1) {
      const randomNumbers = Random.pickUniqueNumbersInRange(RANGE_MIN, RANGE_MAX, LOTTO_LENGTH);
      randomNumbers.sort((a, b) => a - b);
      ticketsPurchased.push(randomNumbers);
    }
    
    return ticketsPurchased;
  }

  printTickets(tickets) {
    const count = tickets.length;

    Console.print(`\n${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i += 1) {
      const text = tickets[i].join(', ');
      Console.print(`[${text}]`);
    }
  }

  getMatches(tickets, winningTicket, bonusNumber) {
    const numbers = winningTicket.getLottoNumbers();
    const scores = createScorekeeper();

    for (let i = 0; i < tickets.length; i += 1) {
      let count = 0;
      tickets[i].forEach((number) => {
        if (numbers.includes(number)) count += 1;
      });
      const scoreKey = getScoreKey(count, tickets[i], bonusNumber);
      if (scoreKey) scores[scoreKey] += 1;
    }

    return scores;
  }

  calculateProfit(purchaseAmount, matches) {
    let totalPrice = 0;
    const keyList = Object.values(keys);
    const matchingKeys = keyList.filter((key) => matches[key] !== 0);

    for (let i = 0; i < matchingKeys.length; i += 1) {
      const price = getEarnings(matchingKeys[i]) * matches[matchingKeys[i]];
      totalPrice += price;
    }
    
    const percentageProfit = (totalPrice / purchaseAmount) * 100;
    return percentageProfit.toFixed(1);
  }

  printResults(results, profit) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${results[keys.THREE]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[keys.FOUR]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[keys.FIVE]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[keys.FIVE_BONUS]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[keys.SIX]}개`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

export default App;
