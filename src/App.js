import { MissionUtils } from "@woowacourse/mission-utils";
import { Computer } from "./Computer/Computer.js";

class App {
  constructor() {
    this.computer = new Computer();
  }
  
  async play() {
    MissionUtils.Console.print("dsds");
    MissionUtils.Console.print(`ddd${this.computer.purchaseLotto}`);
  }
}

export default App;
