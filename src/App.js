import LottoInput from "./Controller/LottoInput";
import LottoOutput from "./Controller/LottoOutput";
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.lottoInput = new LottoInput();
    this.lottoOutput = new LottoOutput();
  }

  async play() {
    const money = await this.lottoInput.priceInput();
    this.lottoOutput.lottoCnt(money);

    const winningNum = await this.lottoInput.winningInput();
    const bonusNum = await this.lottoInput.bonusInput();
  }
}

export default App;
