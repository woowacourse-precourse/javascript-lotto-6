import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { ERROR_MESSAGES } from "./Message.js";

class App {
  constructor() {
    this.price = 0;
    this.lottoTickets = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.results = {
      1: 0, 
      2: 0, 
      3: 0, 
      4: 0, 
      5: 0, 
    };
  }

  async play() {
    try {
      await this.userBuyLotto();
      await this.generateLottoTickets();
      await this.inputWinningNumbers();
      await this.inputBonusNumber();
      await this.calculateResults();
      await this.printResults();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async userBuyLotto() {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT_PROMPT);
    const purchaseAmount = parseInt(userInput);

    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT}`);
    }

    if (purchaseAmount % 1000 !== 0) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT}`);
    }

    this.price = purchaseAmount / 1000;
  }

  async generateLottoTickets() {
    MissionUtils.Console.print(`${this.price}${MESSAGES.TICKET_PURCHASED_MESSAGE}`);

    for (let i = 0; i < this.price; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      MissionUtils.Console.print(randomNumbers);
      this.lottoTickets.push(randomNumbers);
    }
  }

  async inputWinningNumbers() {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGES.WINNING_NUMBERS_PROMPT);
    this.winningNumbers = this.parseNumbers(userInput);
  }

  async inputBonusNumber() {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGES.BONUS_NUMBER_PROMPT);
    this.bonusNumber = this.parseSingleNumber(userInput);
  }

  calculateResults() {
    this.lottoTickets.forEach((lotto) => {
      const { matchCount, hasBonus } = this.checkMatchingNumbers(lotto);

      if (matchCount === 6) {
        this.results[1]++;
      } else if (matchCount === 5 && hasBonus) {
        this.results[2]++;
      } else if (matchCount === 5) {
        this.results[3]++;
      } else if (matchCount === 4) {
        this.results[4]++;
      } else if (matchCount === 3) {
        this.results[5]++;
      }
    });
  }

  checkMatchingNumbers(lotto) {
    let matchCount = 0;
    let hasBonus = false;

    lotto.forEach((ball) => {
      if (this.winningNumbers.includes(ball)) {
        matchCount++;
      } else if (ball === this.bonusNumber) {
        hasBonus = true;
      }
    });

    return { matchCount, hasBonus };
  }

  printResults() {
    const winRate = this.calculateWinningRate();
    MissionUtils.Console.print("\n 당첨 통계 \n --- ");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.results[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.results[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.results[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.results[1]}개`);
    MissionUtils.Console.print(`총 수익률은 ${winRate}%입니다.`);
  }

  calculateWinningRate() {
    const totalWinningAmount =
      this.results[1] * 2000000000 +
      this.results[2] * 30000000 +
      this.results[3] * 1500000 +
      this.results[4] * 50000 +
      this.results[5] * 5000;
    const totalSpent = this.price * 1000;
    return (((totalWinningAmount / totalSpent) - 1) * 100).toFixed(1);
  }

  parseNumbers(input) {
    const numbers = input.split(',').map(Number);

    if (numbers.length !== 6 || numbers.some(isNaN)) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.INVALID_WINNING_NUMBERS}`);
    }

    return numbers.sort((a, b) => a - b);
  }

  parseSingleNumber(input) {
    const number = parseInt(input);

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error
(`[ERROR] ${ERROR_MESSAGES.BONUS_NUMBER_RANGE}`);
    }

    return number;
  }
}

export default App;