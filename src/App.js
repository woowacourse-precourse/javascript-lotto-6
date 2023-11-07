import { MissionUtils } from "@woowacourse/mission-utils";
import { Computer } from "./Computer/Computer.js";
import { CreateLottoNum } from "./LottoGame/CreateLottoNum.js";
import { CreateWinNum } from "./LottoGame/CreateWinnum.js";

class App {
  constructor() {
    this.computer = new Computer();
    this.createLottoNum = new CreateLottoNum();
  }
  
  async play() {
    const lottoNum = await this.createLottoNum.start();
    this.createWinNum = new CreateWinNum(lottoNum);
    await this.createWinNum.start();
  }
}

export default App;
