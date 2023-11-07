import { MissionUtils } from "@woowacourse/mission-utils";
import { Computer } from "./Computer/Computer.js";
import { CreateLottoNum } from "./LottoGame/CreateLottoNum.js";
import { CreateWinNum } from "./LottoGame/CreateWinnum.js";

class App {
  constructor() {
    this.computer = new Computer();
    this.createLottoNum = new CreateLottoNum();
    this.createWinNum = new CreateWinNum();
  }
  
  async play() {
    await this.createLottoNum.start();
    await this.createWinNum.start();
  }
}

export default App;
