import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { RANGE_MIN, RANGE_MAX, LOTTO_LENGTH, inputPrompts, errorMessages } from './constants.js';

class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const tickets = this.createTickets(purchaseAmount);

    this.printTickets(tickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const results = this.getMatches(tickets, winningNumbers, bonusNumber);
    const profit = this.calculateProfit(purchaseAmount, results);

    this.printResults(results, profit);
  }
  
  async getPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(inputPrompts.PURCHASE);
    return input;
  }

  async getWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(inputPrompts.WINNING_NUMBERS);
    const numbers = input.split(',').map((x) => Number(x));
    const lotto = new Lotto(numbers);
    return lotto;
  }

  async getBonusNumber(winningNumbers) {
    const input = await MissionUtils.Console.readLineAsync(inputPrompts.BONUS_NUMBER);
    this.validateBonusNumber(winningNumbers, Number(input));
    const bonusNumber = Number(input);
    return bonusNumber;
  }

  createTickets(amount) {
    this.validateAmount(amount);

    const ticketCount = amount / 1000;
    const ticketsPurchased = [];

    for (let i = 0; i < ticketCount; i += 1) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(RANGE_MIN, RANGE_MAX, LOTTO_LENGTH);
      randomNumbers.sort((a, b) => a - b);
      ticketsPurchased.push(randomNumbers);
    }
    
    return ticketsPurchased;
  }

  printTickets(tickets) {
    const count = tickets.length;
    MissionUtils.Console.print(`\n${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i += 1) {
      const text = tickets[i].join(', ');
      MissionUtils.Console.print(`[${text}]`);
    }
  }

  validateAmount(amount) {
    const remainder = amount % 1000;
    if (remainder) throw new Error(errorMessages.PURCHASE_AMOUNT);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    const numbers = winningNumbers.getLottoNumbers();
    const string = bonusNumber.toString();
    if (Number.isNaN(bonusNumber)) throw new Error(errorMessages.NAN);
    if (bonusNumber < RANGE_MIN || bonusNumber > RANGE_MAX) throw new Error(errorMessages.RANGE);
    if (numbers.includes(bonusNumber)) throw new Error(errorMessages.DUPLICATES);
    if (string.includes('.')) throw new Error(errorMessages.DECIMALS);
  }

  getMatches(tickets, winningTicket, bonusNumber) {
    const numbers = winningTicket.getLottoNumbers();
    const scores = this.createScorekeeper();

    for (let i = 0; i < tickets.length; i += 1) {
      let count = 0;
      tickets[i].forEach((number) => {
        if (numbers.includes(number)) count += 1;
      });
      const scoreKey = this.getScoreKey(count, tickets[i], bonusNumber);
      if (scoreKey) scores[scoreKey] += 1;
    }

    return scores;
  }

  createScorekeeper() {
    const scores = {
      three: 0,
      four: 0,
      five: 0,
      fivePlusBonus: 0,
      six: 0
    };
    return scores;
  }

  getScoreKey(count, ticket, bonusNumber) {
    let key = null;

    if (count === 3) key = 'three';
    if (count === 4) key = 'four';
    if (count === 5 && !ticket.includes(bonusNumber)) key = 'five';
    if (count === 5 && ticket.includes(bonusNumber)) key = 'fivePlusBonus';
    if (count === 6) key = 'six';

    return key;
  }

  calculateProfit(purchaseAmount, matches) {
    let totalPrice = 0;
    let keys = Object.keys(matches);
    keys = keys.filter((key) => matches[key] !== 0);
    for (let i = 0; i < keys.length; i += 1) {
      const price = this.getEarnings(keys[i]) * matches[keys[i]];
      totalPrice += price;
    }
    
    const percentageProfit = (totalPrice / purchaseAmount) * 100;
    return percentageProfit.toFixed(1);
  }

  getEarnings(key) {
    if (key === 'three') return 5000;
    if (key === 'four') return 50000;
    if (key === 'five') return 1500000;
    if (key === 'fivePlusBonus') return 30000000;
    if (key === 'six') return 2000000000;
  }

  printResults(results, profit) {
    MissionUtils.Console.print('당첨 통계\n---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${results.three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${results.four}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results.five}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.fivePlusBonus}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results.six}개`);
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

export default App;
