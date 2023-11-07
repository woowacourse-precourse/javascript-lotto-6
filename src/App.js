import { Console } from "@woowacourse/mission-utils";
import Money from "./Money.js";

class App {
  async play() {
    const money = new Money();
    const userMoney = await money.userMoney();
    Console.print(userMoney)
  }
}

export default App;
