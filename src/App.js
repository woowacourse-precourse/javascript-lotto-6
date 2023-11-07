import LottoInput from "./LottoInput";
import LottoOutput from "./LottoOutput";

class App {
  constructor() {
    this.lottoInput = new LottoInput();
    this.lottoOutput = new LottoOutput();
  }

  async play() {
    const money = await this.lottoInput.priceInput();
    const count = this.lottoOutput.printLottoCnt();
  }
}

export default App;
