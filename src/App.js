import { getMoney, makeLottos } from "./Game.js";
import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.money = 0;
  }
  async play() {
    this.money = await getMoney();
    makeLottos(this.money);
  }
}

export default App;
