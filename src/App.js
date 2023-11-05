import { GAME_MESSAGE } from "./Constant.js";

const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLineAsync(GAME_MESSAGE.BUY_AMOUNT, (money) => {});
  }
}

export default App;
