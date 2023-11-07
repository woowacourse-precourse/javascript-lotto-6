import { getMoney, makeLottos, getUserLottoInput } from "./Game.js";

class App {
  constructor() {
    this.money = 0;
  }
  async play() {
    this.money = await getMoney();
    makeLottos(this.money);
    getUserLottoInput();
  }
}

export default App;
