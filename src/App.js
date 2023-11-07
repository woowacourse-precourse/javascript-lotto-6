import { getMoney } from "./Game.js";

class App {
  constructor() {
    this.money = 0;
  }
  async play() {
    this.money = await getMoney();
  }
}

export default App;
