import Cash from "./Game/Cash.js";
import Matching from "./Game/Matching.js";
import Printer from "./Game/Printer.js";
import Prize from "./Game/Prize.js";
import Calculator from "./ROI/Calculator.js";
import Constants from "./Util/Constants.js";
import IO from "./Util/IOHandler.js";

class App {
  constructor() {
    this.Cash = new Cash();
  }

  async play() {
    const money = await this.Cash.toSpend();
    const lotto = await this.getLotto(money);
    const prize = await this.getPrize();
    const result = await this.compare(lotto, prize);
    await this.printResult(result);
    const profit = await Calculator.profit(result);
    const rate = await Calculator.print(money, profit);
  }

  getLotto(input) {
    const printer = new Printer(input);
    const lottoArray = printer.getTicket();
    return lottoArray;
  }

  async getPrize() {
    const prize = new Prize();
    await prize.init();

    const line = prize.show().line;
    const bonus = prize.show().bonus;
    return { line, bonus };
  }

  compare(lotto, prize) {
    const result = { 3: 0, 4: 0, 5: 0, 5.1: 0, 6: 0 };

    let index = 0;
    while (index < lotto.length) {
      const wins = Matching.between(lotto[index], prize);
      if (wins >= 3) {
        result[wins] += 1;
      }
      index += 1;
    }
    return result;
  }

  printResult(object) {
    for (let key in object) {
      const value = object[key];
      if (key < 5.1) {
        IO.print(`${Constants.wins[key]}${value}개`);
      } else {
        IO.print(`${Constants.wins[5.1]}${object[5.1]}개`);
        IO.print(`${Constants.wins[6]}${object[6]}개`);
        return;
      }
    }
  }
}

export default App;
