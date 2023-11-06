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
}

export default App;
