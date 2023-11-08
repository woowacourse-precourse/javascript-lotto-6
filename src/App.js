import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR, RESULT } from "./constants/constants.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.count = 0;
    this.lotteryTicket = [];
    this.winningNumber = [];
    this.result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  async inputMoney() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
      if (isNaN(+input)) {
        throw new Error(ERROR.INVALID_MONEY);
      }
      if (+input % 1000 !== 0) {
        throw new Error(ERROR.INVALID_UNIT);
      }
      this.count = +input / 1000;
      isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async randomLotto() {
    Console.print(`${this.count}${RESULT.PURCHASE}`);
    for (let i = 0; i < this.count; i++){
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const makedLotto = `[${lotto.join(", ")}]`;
      Console.print(makedLotto);
      this.lotteryTicket.push(lotto);
    }
  }

  async inputWinningNumbers() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBER);
        const number = input.split(",").map((elem) => +elem);
        
        const lotto = new Lotto(number);
        //lotto.validate();
        
        this.winningNumber = number;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputBonusNumbers() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
        const bonus = +input;
        if (this.winningNumber.includes(bonus)) {
          throw new Error(ERROR.DIFFERENT_NUMBER);
        }
        if (bonus < 1 || bonus > 45) {
          throw new Error(ERROR.INVALID_LOTTO_RANGE);
        }
        this.bonusNumber = bonus;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async calculateWinner() {
    this.lotteryTicket.forEach((elem) => {
      let common = 0;
      let bonus = 0;

      elem.forEach((win) => {
        if (this.winningNumber.includes(win)) {
          common += 1;
        }
        if (this.bonus === win) {
          bonus += 1;
        }
      });

      if (common === 6 && bonus === 0) {
        this.result[1] += 1;
      }
      if (common === 5 && bonus === 1) {
        this.result[2] += 1;
      }
      if (common + bonus === 5) {
        this.result[3] += 1;
      }
      if (common + bonus === 4) {
        this.result[4] += 1;
      }
      if (common + bonus === 3) {
        this.result[5] += 1;
      }
    });
  }

  async announcement() {
    const receiveMoney = this.countingMoney();
    
    Console.print(RESULT.STATISTIC);
    Console.print(`${RESULT.FIFTH_PLACE}${this.result[5]}${RESULT.COUNT}`);
    Console.print(`${RESULT.FOURTH_PLACE}${this.result[4]}${RESULT.COUNT}`);
    Console.print(`${RESULT.THIRD_PLACE}${this.result[3]}${RESULT.COUNT}`);
    Console.print(`${RESULT.SECOND_PLACE}${this.result[2]}${RESULT.COUNT}`);
    Console.print(`${RESULT.FIRST_PLACE}${this.result[1]}${RESULT.COUNT}`);
    Console.print(`${RESULT.RATE_OF_RETURN}${receiveMoney}${RESULT.PERCENT}`);
  }

  countingMoney() {
    const winningMoney =
      this.result[1] * 2000000000 +
      this.result[2] * 30000000 +
      this.result[3] * 1500000 +
      this.result[4] * 50000 +
      this.result[5] * 5000;
    const purchases = this.count * 1000;
    return Number((winningMoney / purchases) * 100).toFixed(1);
  }

  async play() {
    await this.inputMoney();
    await this.randomLotto();
    await this.inputWinningNumbers();
    await this.inputBonusNumbers();
    await this.calculateWinner();
    await this.announcement();
  }
}

export default App;
