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
      try {
          const { lottoNum, lottoCount } = await this.createLottoNum.start();
          this.createWinNum = new CreateWinNum(lottoNum.numbers, lottoCount);
          await this.createWinNum.start();
      } catch (error) {
          MissionUtils.Console.print(error.message);
      }
    }
}

export default App;
