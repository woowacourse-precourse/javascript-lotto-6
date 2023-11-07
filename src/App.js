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
    const lotto = await App.getLotto(money);
    const prize = await App.getPrize();
    const result = await App.compare(lotto, prize);
    await App.printResult(result);
    const profit = await Calculator.profit(result);
    await Calculator.print(money, profit);
  }

  static getLotto(money) {
    const printer = new Printer(money);
    const lottoArray = printer.getTicket();
    return lottoArray;
  }

  static async getPrize() {
    const prize = new Prize();
    await prize.init();

    const { line, bonus } = prize.get();
    return { line, bonus };
  }

  static compare(lotto, prize) {
    // 5.1(Second Prize) = 5 wins + bonus
    const result = { 3: 0, 4: 0, 5: 0, 5.1: 0, 6: 0 };

    // lotto === Array, prize === Object
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

  static printResult(result) {
    // result === Object
    const objArray = Object.entries(result);
    objArray.sort();

    IO.print("당첨 통계");
    IO.print("---------");
    let index = 0;
    while (index < objArray.length) {
      const key = objArray[index][0];
      const value = objArray[index][1];
      IO.print(`${Constants.wins[key]}${value}개`);
      index += 1;
    }
  }
}

export default App;
