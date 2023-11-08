import { Random, Console } from "@woowacourse/mission-utils";
import { BUY_AMOUNT_MESSAGE, WIN_NUMBERS_MESSAGE, BONUS_NUMBER_MESSAGE, WIN_PRINT, MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER, WIN_INFO, PRIZE, ERRORS } from './constants.js';
import Lotto from "./Lotto.js";

class App {
  #lottoAmount = 0;
  #lottoNumbers = [];
  #winNumber = [];
  #bonusNumber = 0;
  
  constructor() {
    this.winResult = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  async buyLotto() {
    try {
      const money = await Console.readLineAsync(BUY_AMOUNT_MESSAGE);
      if (money % 1000 !== 0 || money < 1000) throw new Error(ERRORS.InvalidAmount);
      if (Number.isNaN(money)) throw new Error(ERRORS.InvalidNAN);
      if (money === null || money === 0) throw new Error(ERRORS.InvalidBlank);
      return money;
    } catch (e) {
      Console.print(e.message);
      return this.buyLotto();
    }
  }

  printLotto(money) {
    this.#lottoAmount = money / 1000;
    Console.print(`\n ${this.#lottoAmount}개를 구매했습니다.\n`);
    for (let i = 0; i < this.#lottoAmount; i++) {
      const lottoNumberArr = Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER).sort((a, b) => a - b);
      const lottoNum = `[${lottoNumberArr.join(", ")}]`;
      Console.print(lottoNum);
      this.#lottoNumbers.push(lottoNumberArr);
    }
  }

  async inputWinLotto() {
    try {
      const input = await Console.readLineAsync(WIN_NUMBERS_MESSAGE);
      this.#winNumber = input.split(',');
      const lotto = new Lotto(this.#winNumber);
      return this.#winNumber;
    } catch (e) {
      Console.print(e.message);
      return this.inputWinLotto();
    }
  }

  async inputBonusNum() {
    try {
      const input = await Console.readLineAsync(BONUS_NUMBER_MESSAGE);
      if (this.#winNumber.includes(input)) throw new Error(ERRORS.InvalidDuplicateNumber);
      if (input < 1 || input > 45) throw new Error(ERRORS.InvalidRange);
      this.#bonusNumber = input;
    } catch (e) {
      Console.print(e.message);
      return this.inputBonusNum();
    }
  }

  calculateWin() {
    this.#lottoNumbers.forEach((num) => {
      const match = num.filter(num => this.#winNumber.includes(+num));
      if (match.length === 6) this.winResult[1]++;
      if (match.length === 5 && num.includes(this.#bonusNumber)) this.winResult[2]++;
      if (match.length === 5 && !num.includes(this.#bonusNumber)) this.winResult[3]++;
      if (match.length === 4 || (match.length === 3 && num.includes(this.#bonusNumber))) this.winResult[4]++;
      if (match.length === 3 || (match.length === 2 && num.includes(this.#bonusNumber))) this.winResult[5]++;
    })
  }

  printWin() {
    const getMoney = this.winResult[1] * PRIZE[1] + this.winResult[2] * PRIZE[2] + this.winResult[3] * PRIZE[3] + this.winResult[4] * PRIZE[4] + this.winResult[5] * PRIZE[5];
    const spendmoney = this.#lottoAmount * 1000;
    const rateofReturn = Number((getMoney / spendmoney) * 100).toFixed(1)
    Console.print(`\n${WIN_PRINT}\n---`);
    Console.print(`${WIN_INFO[3]}${this.winResult[5]}개\n`);
    Console.print(`${WIN_INFO[4]}${this.winResult[4]}개\n`);
    Console.print(`${WIN_INFO[5]}${this.winResult[3]}개\n`);
    Console.print(`${WIN_INFO['5+1']}${this.winResult[2]}개\n`);
    Console.print(`${WIN_INFO[6]}${this.winResult[1]}개\n`);
    Console.print(`총 수익률은 ${rateofReturn}%입니다.\n`);
  }

  async play() {
    const money = await this.buyLotto();
    this.printLotto(money);
    await this.inputWinLotto();
    await this.inputBonusNum();
    await this.calculateWin();
    await this.printWin();
  }
}

export default App;
